<script>
	import { page } from '$app/stores';

	let pageData = $page.data.data;
	let allData = pageData;
	console.log(allData[0][0]);
</script>

{#if allData != undefined || allData != null}
	<ul class="flex flex-col justify-center items-center gap-4 list-none my-10 mx-0 p-0">
		{#each allData as data}
			{#each data as datum, index}
				<li class="flex flex-col gap-1 items-start justify-center bg-gray-200 border-2 border-black rounded-md w-fit p-3" id={`${index}`}>
					<p>Card number: {index}</p>
					<p>Album id {datum.albumId}</p>
					<img src={datum.url} alt="" class="max-w-[100px]">
				</li>
			{/each}
		{/each}
	</ul>
{/if}


<!-- {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
} -->