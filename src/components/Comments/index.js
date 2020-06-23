import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({ url, title }) => {
    const urlComplete = `https://guilhermebeneti.com.br${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
            shortname="guilhermebeneti"
            identifier={urlComplete}
            title={title}
            url={urlComplete}
        />
        </S.CommentsWrapper>
    )

}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Comments