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
                template: '#resume',
                created: function(){ console.log('created the images component')},
                destroyed: function(){ console.log('destroyed the images component')}
            }

        },
        {
            path: '/skills',
            component: {
              template: '#skills',
            }
        },
        {
            path: '/contact',
            component: {
              template: '#contact',
            }
        },

    ]

})




var mainVm = new Vue({
    el: '#app',
    router: myRouter,
})
