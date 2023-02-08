<script>
    import { crossfade } from "svelte/types/runtime/transition";

    function removeCors (url){
        const res= new Response(response)
        res.headers.append('Access-Control-Allow-Origin',url);
        return res;
    }

	let palette = ["red","blue","green","yellow"]
	let hasError = false
    let errorMessage
	async function clickHandler(palette){
        hasError = false
        if (palette.length!=0){
            while(palette.length > 0) {palette.pop();}
        }
		const url = 'http://palett.es/API/v1/palette'
        let response = await fetch(url)
        response = removeCors(url)
        console.log(response.json())
    }
</script>

<button on:click={clickHandler}>
	Generate Palette
</button>
{#if !hasError}
    <div class="Palette">
        {#each palette as color}
            <div style="background-color: {color};" class="Color"></div>
        {/each}
	</div>
{:else}
	<h1>{errorMessage}</h1>
{/if}

<style>
    .Color {
        width: 20px;
        height: 20px;
        border: 1px solid rgba(0, 0, 0, .2);
    }
    .Palette{
        display: flex;
    }
</style>