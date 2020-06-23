import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
    <PostItem slug={hit.fields.slug} background={hit.background} category={hit.category} date={hit.date} timeToRead={hit.timeToRead} title={hit.title} description={hit.description} />
)

export default Hit