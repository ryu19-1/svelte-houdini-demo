import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: './schema.graphql',
	generates: {
		'./src/mocks/generated/graphql.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'@graphql-codegen/typescript-msw',
				{
					'graphql-codegen-typescript-mock-data': {
						prefix: 'mock'
					}
				}
			]
		}
	}
};

export default config;
