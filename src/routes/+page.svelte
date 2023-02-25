<script>
    import { writeObj } from '$lib/firebase-utils';
    import { child, get, getDatabase, onValue, ref, off } from 'firebase/database';
    
	// const name = document.querySelector(".name");

    let name = '';
    let course = '';
    let topic = '';
    function handleClick() {
        const courseData = {
            name: name,
            course: course,
            topic: topic
        };
        writeObj('StudentInfo', courseData);
        name;
    }
</script>
<div class="container mx-auto p-8 space-y-8">
    <h1>Tutors Live Simulator</h1>
    <p>Fill in Student Info</p>
    <form id="studentForm">
        <div class="card p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <label class="label">
                <span> Name</span>
                <input
                    id="name"
                    bind:value={name}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Full Name"
                />
            </label>
            <label class="label">
                <span> Course</span>
                <input
                    id="course"
                    bind:value={course}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Course"
                />
            </label>
            <label class="label">
                <span> Topic</span>
                <input
                    id="topic"
                    bind:value={topic}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Topic"
                />
            </label>
        </div>
        <button
            on:click={handleClick}
            class="btn variant-filled-secondary btn-base ring-2 ring-primary-500 ring-inset text-filled-500"
        >
            Submit to Firebase
        </button>
    </form>
</div>