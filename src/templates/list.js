import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../components/ListWrapper/styled'

export const query = graphql`
        query PostList ($skip: Int!, $limit: Int!){
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC}
                limit: $limit
                skip: $skip
                ) {
                edges {
                node {
                    fields {
                    slug
                    }
                    frontmatter {
                    background
                    category
                    date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
                    description
                    title
                    }
                    timeToRead
                }
                }
            }
        }
    `

const List = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { currentPage, numberPages } = props.pageContext
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === numberPages
    const previousPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}` 
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
        <SEO title="Home" />
        <S.ListWrapper>
        {postList.map(({ 
            node:
            { frontmatter: { background, category, date, description, title }, 
            timeToRead , fields: {slug}
            }
            }
        ) => (
            <PostItem slug={slug} background={background} category={category} date={date} timeToRead={timeToRead} title={title} description={description} />
        ))}
        </S.ListWrapper>
        <Pagination isFirstPage={isFirstPage} isLastPage={isLastPage} currentPage={currentPage} numberPages={numberPages} previousPage={previousPage} nextPage={nextPage} />
        </Layout>
    )
}

export default List