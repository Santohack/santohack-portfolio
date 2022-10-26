export default {
    name: "author",
    type: "document",
    title: "Author",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      },
     
     
      },
    ],
  };
  