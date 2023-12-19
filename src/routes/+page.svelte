<script lang="ts">
	import { AddUserStore } from '$houdini';
	import type { PageData } from './$types';

	export let data: PageData;

	const handleClick = async () => {
		const store = new AddUserStore();
		const result = await store.mutate({
			user: {
				name: 'addUser'
			}
		});
		if (result.data?.addUser) alert('ユーザを追加しました');
	};
</script>

{#if data.users}
	<h1>ユーザ一覧</h1>

	{#each data.users as user}
		<div class="user-content">
			<span>ID: {user.id}</span>
			<span>ユーザ名: {user.name}</span>
		</div>
	{/each}

	<button on:click={handleClick}>ユーザー追加</button>
{/if}

<style>
	.user-content {
		display: flex;
		gap: 16px;
	}
</style>
