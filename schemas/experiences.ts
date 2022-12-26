export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string',
            validation: Rule => Rule.required()
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}],
            validation: Rule => Rule.required()
        },
    ]
}