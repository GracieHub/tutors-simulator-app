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
                <select
                    id="name"
                    bind:value={name}
                    class="select"
                    placeholder="Full Name"
                >
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane </option>
                    <option value="Harry Smith">Harry Smith</option>
                    <option value="Jason Power">Jason Power</option>
                    <option value="Emma Jones">Emma Jones</option>
                    <option value="Joe Palmer">Joe Palmer</option>
                    <option value="Karen Murphy">Karen Murphy</option>
                    <option value="James O’ Shea">James O’ Shea</option>
                    <option value="John Dunne">John Dunne</option>
                    <option value="Freda Quilty">Freda Quilty</option>
                    <option value="Lisa Walsh">Lisa Walsh</option>
                    <option value="Nicky Power">Nicky Power</option>
                    <option value="Lola Martins">Lola Martins</option>
                    <option value="Simon Beck">Simon Becke</option>
                    <option value="Heather O’ Driscol">Heather O’ Driscol</option>
                </select>
            </label>
            <label class="label">
                <span> Module</span>
                <select
                    id="module"
                    bind:value={module}
                    class="select"
                    placeholder="Module"
                >
                <option value="Mobile Application Development">Mobile Application Development</option>
                <option value="Programming ">Programming </option>
                <option value="ICT Skills2">ICT Skills2</option>
                <option value="Full Stack Web Development">Full Stack Web Development</option>
            </select>
            </label>
            <label class="label">
                <span> Topic</span>
                <select
                    id="topic"
                    bind:value={topic}
                    class="select"
                    placeholder="Topic"
                >
                <option value="Lab-Movie_App-Part2">Lab-Movie_App-Part2 1</option>
                <option value="Game of Pong - Lab 06a ">Game of Pong - Lab 06a </option>
                <option value="Lab13 -Todo">Lab13 -Todo</option>
                <option value="Lab 5B">Lab 5B</option>
                <option value="Lab-A04 Placemark-03">Lab-A04 Placemark-03</option>
            </select>
            </label>
            <label class="label">
                <span> Topic Image</span>
                <select
                    id="image"
                    bind:value={topicimage}
                    class="select"
                    placeholder="Image"
                >
                <option value="https://setu-hdip-comp-sci-2021-mobile-app-dev.netlify.app/topic-04-interfaces/unit-02-dh/book-03-placemark-03/img/main.png">John Doe</option>
                <option value="https://setu-hdip-comp-sci-2021-mobile-app-dev.netlify.app/topic-08-layouts/unit-01-dd/talk-01-patterns-1/patterns-1.png">Mary Jane </option>
                <option value="https://setu-hdip-comp-sci-2021-mobile-app-dev.netlify.app/topic-04-interfaces/unit-02-dh/book-03-placemark-03/img/main.png">Harry Smith</option>
                <option value="https://hdipcs-programming-2023.netlify.app/topic-03-methods/unit-03a-methods/topic.png">Jason Power</option>
                <option value="https://hdipcs-programming-2023.netlify.app/topic-03-methods/unit-03a-methods/topic.png">Emma Jones</option>
                <option value="https://setu-hdip-comp-sci-2021-mobile-app-dev.netlify.app/topic-08-layouts/unit-01-dd/talk-01-patterns-1/patterns-1.png">Joe Palmer</option>
                <option value="https://ict2-hdip-comp-sc-setu.netlify.app/topic03/book-1/img/main.jpeg">Karen Murphy</option>
                <option value="https://hdipcs-programming-2023.netlify.app/topic-06-pong/unit-06a-pong-V1-V5/talk-1-pong-overview/a-processing-game-of-pong-oreverview.png">James O’ Shea</option>
                <option value="https://wit-hdip-comp-sci-2021-full-stack.netlify.app/topic-13-svelte-intro/unit-2/book-svelte-1-todo/img/main.jpg">John Dunne</option>
                <option value="https://wit-hdip-comp-sci-2021-full-stack.netlify.app/topic-13-svelte-intro/unit-2/book-svelte-1-todo/img/main.jpg">Freda Quilty</option>
                <option value="https://hdipcs-programming-2023.netlify.app/topic-06-pong/unit-06a-pong-V1-V5/talk-1-pong-overview/a-processing-game-of-pong-oreverview.png">Lisa Walsh</option>
                <option value="https://wit-hdip-comp-sci-2021-programming.netlify.app/topic-05-arrays/unit-05b-arrays-and-classes/book/img/main.png">Nicky Power</option>
                <option value="https://wit-hdip-comp-sci-2021-full-stack.netlify.app/topic-13-svelte-intro/unit-2/book-svelte-1-todo/img/main.jpg">Lola Martins</option>
                <option value="https://setu-hdip-comp-sci-2021-mobile-app-dev.netlify.app/topic-04-interfaces/unit-02-dh/book-03-placemark-03/img/main.png">Simon Becke</option>
                <option value="https://wit-hdip-comp-sci-2021-full-stack.netlify.app/topic-13-svelte-intro/unit-2/book-svelte-1-todo/img/main.jpg">Heather O’ Driscol</option>
            </select>

            </label>
            <label class="label">
                <span> Profile Image</span>
                <select
                    id="profileimage"
                    bind:value={profileimage}
                    class="select"
                    placeholder="Profile Image"
                >
                <option value="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60">John Doe</option>
                <option value="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800">Mary Jane </option>
                <option value="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60">Harry Smith</option>
                <option value="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60">Jason Power</option>
                <option value="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800">Emma Jones</option>
                <option value="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60">Joe Palmer</option>
                <option value="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60">Karen Murphy</option>
                <option value="https://images.unsplash.com/photo-1596502059330-be10388e3ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60">James O’ Shea</option>
                <option value="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=">John Dunne</option>
                <option value="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=">Freda Quilty</option>
                <option value="https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=">Lisa Walsh</option>
                <option value="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=">Nicky Power</option>
                <option value="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60">Lola Martins</option>
                <option value="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80">Simon Becke</option>
                <option value="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60">Heather O’ Driscol</option>
            </select>
            </label>
            <label class="label">
                <span> Slack Huddle Link</span>
                <select
                    id="slackhuddle"
                    bind:value={slackhuddle}
                    class="select"
                    placeholder="Slack Huddle Link"
                >
                <option value="https://app.slack.com/huddle/T04SMGY98VB/D04SMMGAK5K">Harry Smith</option>
                <option value="https://app.slack.com/huddle/T04SMGY98VB/D04SQFU6C4B">Emma Jones</option>
            </select>
            </label>
            <label class="label">
                <span> Slack Message Link</span>
                <select
                    id="slackmsg"
                    bind:value={slackmsg}
                    class="select"
                    placeholder="Slack Message Link"
                >
                <option value="https://hdipprototype.slack.com/archives/D04SMMGAK5K">Harry Smith</option>
                <option value="https://hdipprototype.slack.com/archives/D04SQFU6C4B">Emma Jones</option>
            </select>
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
