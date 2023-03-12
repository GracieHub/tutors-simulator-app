<script>
    import { writeObj } from '$lib/firebase-utils';
    import { child, get, getDatabase, onValue, ref, off } from 'firebase/database';
    
	// const name = document.querySelector(".name");

    let name = '';
    let module = '';
    let topic = '';
    let topicimage = '';
    let profileimage = '';
    let slackmsg = '';
    let slackhuddle = '';

    function handleClick() {
        const courseData = {
            name: name,
            module: module,
            topic: topic,
            topicimage: topicimage,
            profileimage: profileimage,
            slackmsg: slackmsg,
            slackhuddle: slackhuddle
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
                <span> Module</span>
                <input
                    id="module"
                    bind:value={module}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Module"
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
            <label class="label">
                <span> Topic Image</span>
                <input
                    id="image"
                    bind:value={topicimage}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Image"
                />
            </label>
            <label class="label">
                <span> Profile Image</span>
                <input
                    id="profileimage"
                    bind:value={profileimage}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Profile Image"
                />
            </label>
            <label class="label">
                <span> Slack Huddle Link</span>
                <input
                    id="slack"
                    bind:value={slackhuddle}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Slack Huddle Link"
                />
            </label>
            <label class="label">
                <span> Slack Message Link</span>
                <input
                    id="slack"
                    bind:value={slackmsg}
                    class="input variant-form-material"
                    type="text"
                    placeholder="Slack Message Link"
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