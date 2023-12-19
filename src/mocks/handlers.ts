import { graphql, HttpResponse } from 'msw';
import { mockUser } from './generated/graphql';

export const handlers = [
	graphql.query('GetUsers', () => {
		return HttpResponse.json({
			data: {
				users: [...new Array(5).keys()].map((id) =>
					mockUser({
						id: id + 1,
						name: `User${id + 1}`
					})
				)
			}
		});
	}),
	graphql.mutation('AddUser', () => {
		return HttpResponse.json({
			data: {
				addUser: { id: '1' }
			}
		});
	})
];
