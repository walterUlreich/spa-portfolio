var myRouter = new VueRouter({
    routes: [
        {
            path: '/', // localhost:8080/#
            component: {
                template: `
                <div class="index">
                <div class="container about text-center">
                   <h3>About Me</h3>
                   <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
                 </div>

                <div class="projects container text-center">
                <h3>Projects</h3>


                     <div class="row">
                       <div class="col-md-4">
                         <a href="#"><img src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" width="300" height="200" class="gallery_image">
                         <h3>Website 1</h3></a>
                       </div>
                       <div class="col-md-4">
                         <a href="#"><img src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" width="300" height="200" class="gallery_image">
                         <h3>Website 2</h3></a>
                       </div>
                       <div class="col-md-4">
                         <a href="#"><img src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" width="300" height="200" class="gallery_image">
                         <h3>Website 3</h3></a>
                       </div>
                     </div>
                     <div class="row">
                       <div class="col-md-4">
                         <a href="#"><img src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" width="300" height="200" class="gallery_image">
                         <h3>Website 4</h3></a>
                       </div>
                       <div class="col-md-4">
                         <a href="#"><img src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" width="300" height="200" class="gallery_image">
                         <h3>Website 5</h3></a>
                       </div>
                       <div class="col-md-4">
                         <a href="#"><img src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" width="300" height="200" class="gallery_image">
                         <h3>Website 6</h3></a>
                       </div>
                     </div>
                   </div>
                   </div>
                `,
                created: function(){ console.log('created the main component')},
                destroyed: function(){ console.log('destroyed the main component')}
            }
        },
        {
            path: '/resume',
            component : {
                template: `
                <div class="resume_main container-fluid">
                <div class="row">
                <div class="profile col-md-8">
                  <span class="fa fa-user-circle"></span>
                  <h1>Career Profile</h1>
                  <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>

                  <span class="fa fa-briefcase"></span>
                  <h1>Experiences</h1>
                    <h2>Job Title</h2>
                    <h3>Company</h2>
                    <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>

                    <h2>Job Title</h2>
                    <h3>Company</h2>
                    <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
                  </div>

                <div class="education col-md-4">
                  <h2>Education</h2>
                  <h3>MM in Computer Science</h3>
                  <p>Some University<br>2015-2017</p><br><br>
                  <h3>BS in Web Development</h3>
                  <p>Some University<br>2010-2014</p>
                </div>

              </div>
              </div>`,
                created: function(){ console.log('created the images component')},
                destroyed: function(){ console.log('destroyed the images component')}
            }

        },
        {
            path: '/skills',
            component: {
              template: `
              <div class="skills_main container text-center">
                  <h1>HTML5</h1>
                  <h1>CSS3</h1>
                  <h1>Javascript</h1>
                  <h1>jQuery</h1>
                  <h1>CSS Frameworks</h1>
                  <h1>Javascript Frameworks</h1>
                  <h1>MEVN Stack</h1>
                  <h1>WordPress</h1>
              </div>`,
            }
        },
        {
            path: '/contact',
            component: {
              template: `
              <div class="container contact_main text-center">
                <h1>Get In Touch</h1>
                <div class="row">
                  <div class="col-md-4">
                    <span class="fa fa-map-marker"></span>
                    <p>3950 Colorado Avenue<br>Boulder, Colorado</p>
                  </div>
                  <div class="col-md-4">
                    <span class="fa fa-phone"></span>
                    <p>mob. +847 791 8811</p>
                  </div>
                  <div class="col-md-4">
                    <span class="fa fa-envelope"></span>
                    <p>wulreich99@gmail.com</p>
                  </div>
                </div>
              </div>`,
            }
        },

    ]

})




var mainVm = new Vue({
    el: '#app',
    router: myRouter,
})
