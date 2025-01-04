// Соответствие файловой структуре



import path from 'path'
import fs, {constants} from 'fs'

const errors = {
	reportedExtraFolders: false,
	reportedMissingFolders: false,
	reportedUnexpectedFiles: false,
}

/** @type {import('eslint').Rule.RuleModule} */
export const structure = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Расширенная проверка структуры проекта',
		},
		fixable: 'code',
		schema: [{
			type: 'object',
			properties: {
				folders: {
					type: 'array',
					items: {
						type: 'string',
					},
				},
				files: {
					type: 'array',
					items: {
						type: 'string',
					},
				},
			},
			required: ['folders', 'files'],
		}]
	},

	create(context) {
		let reportedExtraFolders = errors.reportedExtraFolders;
		let reportedMissingFolders = errors.reportedMissingFolders;
		let reportedUnexpectedFiles = errors.reportedUnexpectedFiles;

		return {
			Program(node) {
				const filename = context.filename;
				const projectRoot = findProjectRoot(path.dirname(filename));

				if (!projectRoot) {
					context.report({
						node,
						message: 'Не удалось найти корневую директорию проекта.',
					});
					return;
				}

				const srcPath = path.join(projectRoot, 'src');
				if (!fs.existsSync(srcPath)) {
					context.report({
						node,
						message: 'Отсутствует папка src',
						fix: fixer => {
							fs.mkdirSync(srcPath);
							return fixer.replaceTextRange([0, 0], '// Создана папка src\n');
						},
					});
					return;
				}

				const requiredFolders = ['app', 'processes', 'pages', 'widgets', 'features', 'entities', 'shared'];
				const actualFolders = fs.readdirSync(srcPath).filter(item => fs.statSync(path.join(srcPath, item)).isDirectory());

				// Проверка на наличие лишних папок
				const extraFolders = actualFolders.filter(folder => !requiredFolders.includes(folder));
				if (extraFolders.length > 0 && !reportedExtraFolders) {
					errors.reportedExtraFolders = true;
					context.report({
						node,
						message: `Несоответствующие папки: ${extraFolders.join(', ')}. Допускаются только ${requiredFolders.join(', ')}.`,
						//once: true, // Обеспечивает вывод сообщения только один раз
					});
				}

				// Проверка на отсутствие необходимых папок
				const missingFolders = requiredFolders.filter(folder => !actualFolders.includes(folder));
				if (missingFolders.length > 0 && !reportedMissingFolders) {
					errors.reportedMissingFolders = true;
					missingFolders.forEach(folder => {
						context.report({
							node,
							message: `Отсутствует требуемая папка: src/${folder}`,
							//once: true, // Обеспечивает вывод сообщения только один раз
							fix: fixer => {
								fs.mkdirSync(path.join(srcPath, folder));
								fixer.replaceTextRange([0, 0], `// Создана папка: ${folder}\n`);
							},
						});
					});
				}

				// Проверка на наличие файлов в папке src/
				const unexpectedFiles = fs.readdirSync(srcPath).filter(item => !fs.statSync(path.join(srcPath, item)).isDirectory());
				if (unexpectedFiles.length > 0 && !reportedUnexpectedFiles) {
					errors.reportedUnexpectedFiles = true;
					context.report({
						node,
						message: `Файлов в папке src/ быть не должно: ${unexpectedFiles.join(', ')}.`,
						//once: true,
					});
				}
			}
		};
	},
}

function findProjectRoot(filePath) {
	// Преобразуем относительный путь в абсолютный, если необходимо
	const absolutePath = path.isAbsolute(filePath)
		? filePath
		: path.resolve(process.cwd(), filePath);

	// Начинаем с директории, содержащей файл
	let currentDir = path.dirname(absolutePath);

	const root = path.parse(currentDir).root;

	while (currentDir !== root) {
		const packageJsonPath = path.join(currentDir, 'package.json');

		if (fs.existsSync(packageJsonPath)) {
			// package.json найден, возвращаем текущую директорию как корень проекта
			return currentDir;
		}

		// Поднимаемся на уровень выше
		currentDir = path.dirname(currentDir);
	}
}

function checkRequiredFolders(projectRoot, requiredFolders) {
	const missingFolders = [];

	for (const folder of requiredFolders) {
		const folderPath = path.join(projectRoot, folder);
		if (!fs.existsSync(folderPath)) {
			missingFolders.push(folder);
		}
	}

	return missingFolders;
}

function checkRequiredFiles(projectRoot, requiredFiles) {
	const missingFiles = [];

	for (const file of requiredFiles) {
		const filePath = path.join(projectRoot, file);
		if (!fs.existsSync(filePath)) {
			missingFiles.push(file);
		}
	}

	return missingFiles;
}
