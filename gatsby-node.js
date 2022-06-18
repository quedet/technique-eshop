exports.createPages = async ({ graphql, actions: { createPage }}) => {
    const {data} = await graphql(`
        query {
            allDatoCmsProduct {
                nodes {
                    id
                    dimension
                    capacity
                    slug
                    price
                    description
                    power
                    weight
                    name
                    image {
                        gatsbyImageData
                    }
                    package {
                        name
                        slug
                    }
                }
            }
        }
    `)

    const Products = data.allDatoCmsProduct.nodes

    Products.forEach(product => {
        createPage({
            path: `/catalog/${product.package.slug}/${product.slug}`,
            component: require.resolve('./src/templates/product_detail.js'),
            context: {
                product
            }
        })
    })
}