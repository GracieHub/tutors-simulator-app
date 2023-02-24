<script>
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import { AppShell, AppBar } from "@skeletonlabs/skeleton";
	import { getKeys } from "../environment";
	import { onMount } from "svelte";
	import { initFirebase } from "$lib/firebase-utils";

	onMount(async () => {
		initFirebase(getKeys().firebase);
	});
 </script> 

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Tutors Simulator App</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
