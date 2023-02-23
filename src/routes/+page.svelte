<script>
//	import StudentCard from "$lib/StudentCard.svelte";
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>Tutors Live Simulator</h1>
	<p>Fill in Student Info </p>
		
		<div class="card p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
			<label class="label">
				<span>Name</span>
				<input class="input variant-form-material" type="text" placeholder="Full Name" />
			</label>
			<label class="label">
				<span> Course</span>
				<input class="input variant-form-material" type="text" placeholder="Course" />
			</label>
			<label class="label">
				<span> Topic</span>
				<input class="input variant-form-material" type="text" placeholder="Topic" />
			</label>
		</div>
			
		<button class="btn variant-filled-secondary btn-base ring-2 ring-primary-500 ring-inset text-filled-500">
			Submit to Firebase
		</button>
</div>
