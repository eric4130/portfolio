<template>
<div>

    <!-- Header -->
        <div class="columns">
            <div class="column is-narrow">
                <img class="mainlogo" src='../assets/logo.png'>
            </div>
            <div class="column">
                <h1 class="main"> <hr class="linkhr">
                 <a href="https://github.com/eric4130?tab=repositories"  class="links" target="_blank"><span class="icon">
                  <i class="fab iconlinks fa-github"></i>
                </span></a>
                 <a href="https://www.linkedin.com/in/eric-smrdel-ba621b1aa/" class="links" target="_blank"><span class="icon">
                  <i class="fab iconlinks fa-linkedin"></i>
                </span></a>
                    <br>Hi, I'm Eric Smrdel. <br> Web Developer, <br> Student & Musician </h1>
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-6">
                <h2 class="h2text">I am a 34 year old student of web development and all things creative.<br>
                    <br>
                    As I have progressed, my skills have grown to complement my artistic-side and have been inspired by many great developers and teachers.<br>
                    <br>
                    Through this experience, I have created web-sites which meet the needs of users and clients and are written in code which is both easy to read and collaborate on.
                    </h2>
            </div>
            <div class="column is-6">
                <img src="../assets/me.png" class="me">
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-12">
                <h1 class="skillsheader">My Skills</h1>
                <p class="h2text">Apart from several books that I've worked through, I've also taken many classes online such as CS50,
                    Responsive Web Design, and Javascript Algorithms and Data Structures.
                    </p>
            </div>
        </div>
        <div class="columns is-gapless">
            <div class="column is-3">
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>
            <div class="column is-3">
                <ul>
                    <li>CSS FRAMEWORKS</li>
                    <li>SCSS</li>
                </ul>
            </div>
            <div class="column is-3">
                <ul>
                    <li>JAVASCRIPT ES6</li>
                    <li>VUE.JS</li>
                </ul>
            </div>
            <div class="column is-3">
                <ul>
                    <li>PYTHON & SQL</li>
                    <li>GIT</li>
                </ul>
            </div>
        </div>
        <div class="columns">
            <div class="column is-12">
                <h1 class="skillsheader" style="margin-top:40px;">Works In Progress</h1>
                <p class="h2text" style="margin-bottom:30px;">I enjoy staying busy and always have at least 2 projects in the works.
                    Check out some of the projects I've worked on!
                    </p>
            </div>
        </div>

<!-- Projects Component-->
<Projects />

<!-- Footer -->
        <div class="columns">
            <div class="column is-12">
                <h1 class="skillsheader">Let's 
                    <div class="create">
                    <span class="color1">C</span>
                    <span class="color2">R</span> 
                    <span class="color3">E</span> 
                    <span class="color4">A</span> 
                    <span class="color5">T</span> 
                    <span class="color6">E</span>  
                   </div>
                    Something as a <span class="color5">Team</span>! </h1>
                <p class="h2text" style="margin-bottom:30px;">Reach out to me if you're looking for a dedicated developer,
                    or if you just want to connect and build a community project together...
                    </p>
                    <p class="h2text">Send an e-mail to<span class="email">esmrdel413@hotmail.com</span></p>
                    <p class="h2text" style="text-align:center;">Or send a message directly through the form below:</p>
                    <EmailJS />
                    <div class="footer-bottom has-text-centered">
            <a href="https://github.com/eric4130?tab=repositories" class="link1" target="_blank"><span class="icon">
                  <i class="fab fa-github"></i>
                </span></a>
           <a href="https://www.linkedin.com/in/eric-smrdel-ba621b1aa/" target="_blank"><span class="icon">
                  <i class="fab fa-linkedin"></i>
                </span></a>
            <p>Copyright &#9400; 2022 Esco Web Industries, LLC</p>
            </div>
            </div>
        </div>



</div>
</template>



<script>
import Projects from '@/components/Projects'
import EmailJS from '@/components/EmailJS'

export default {
  name:'Home',
components: {
    Projects,
    EmailJS
},
}
</script>