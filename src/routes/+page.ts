import { GetUsersStore } from '$houdini';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';

export const load: PageLoad = async (event) => {
	if (browser) {
		const store = new GetUsersStore();
		const result = await store.fetch({ event });
		if (result.data?.users) {
			return {
				users: result.data.users
			};
		} else {
			throw new Error(result.errors?.join('\n'));
		}
	}
};
