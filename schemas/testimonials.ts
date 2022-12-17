export default {
  name:'testimonials',
  title:'Testimonials',
  type: 'document',
  fields:[
      { 
          name:'name',
          title:'Name',
          type: 'string'
      },
      {
          name:'company',
          title:'Company',
          type:'string'
      },
      {
          name:'imgurl',
          title:'ImgUrl',
          type: 'image',
          options: {
            hotspot: true, //they can crop the image to portrait when they upload their image
          },
      },  
      {
          name:'feedback',
          title:'Feedback',
          type:'string'
      }
  ]
}