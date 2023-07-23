export default {
    name: 'Pizza',
    title: "Pizza",
    type: "document",
    fields: [
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true, //to add data
            }
        },
        {
          name: 'name',
          title: 'title',
            type: 'string'
        },
        { //slug contains id
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of: [{type: 'number'}] 
        },
        {
            name: 'details',
            title: 'details',
            type: 'string'
        }
    ]
}