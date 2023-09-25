<script>
    import {page} from '$app/stores';
	let count = 0;
    let {data} = $page;
    
</script>

{#if data!=undefined || data!=null}
    <ul class="flex flex-col gap-4 list-none m-0 p-0">
        {#each data.data as datum}
            <li class="flex flex-col gap-3">

            </li>
        {/each}
    </ul>
{/if}