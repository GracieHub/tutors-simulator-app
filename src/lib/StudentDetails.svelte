<script>
	import { writeObj } from "$lib/firebase-utils";
	import { moduleData, studentData, topicData } from "../data";

	let name = "";
	let module = "";
	let topic = "";
	/**
	 * @type {any}
	 */
	let nameSelected = "";
	let moduleSelected = "";
	let topicSelected = "";
	function handleClick() {
		const studentObj = studentData.find((student) => student.name == nameSelected);
		const topicObj = topicData.find((topic) => topic.topic == topicSelected);
		const courseData = {
			name: nameSelected,
			module: moduleSelected,
			topic: topicSelected,
			topicimage: topicObj.topicimage,
			profileimage: studentObj.profileimage,
			slackmsg: studentObj.slackhuddle,
			slackhuddle: topicObj.topichuddle
		};
		console.log(courseData);
		writeObj("StudentInfo", courseData);
	}
</script>

<div class="container mx-auto p-8 space-y-8">
	<form id="studentForm">
		<div class="card p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
			<label class="label">
				<span> Name</span>
				<select id="name" bind:value={nameSelected} on:change={() => (name = "")} class="select">
					{#each studentData as student}
						<option value={student.name}>
							{student.name}
						</option>
					{/each}
				</select>
			</label>
			<label class="label">
				<span> Module</span>
				<select id="module" bind:value={moduleSelected} on:change={() => (module = "")} class="select">
					{#each moduleData as module}
						<option value={module}>
							{module}
						</option>
					{/each}
				</select>
			</label>
			<label class="label">
				<span> Topic</span>
				<select id="topic" bind:value={topicSelected} on:change={() => (topic = "")} class="select">
					{#each topicData as topic}
						<option value={topic.topic}>
							{topic.topic}
						</option>
					{/each}
				</select>
			</label>
			<button on:click={handleClick} class="btn variant-filled-secondary btn-base ring-2 ring-primary-500 ring-inset text-filled-500"> Submit to Firebase </button>
		</div>
	</form>
</div>
