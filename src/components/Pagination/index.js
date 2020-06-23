import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as S from './styled'

const Pagination = ({ isFirstPage, isLastPage, currentPage, numberPages, previousPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirstPage && <Link to={previousPage}>página anterior</Link>}
        <p>{currentPage} de {numberPages} páginas</p>
        {!isLastPage && <Link to={nextPage}>próxima página</Link>}
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirstPage: PropTypes.bool.isRequired,
    isLastPage: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numberPages: PropTypes.number.isRequired,
    previousPage: PropTypes.string,
    nextPage: PropTypes.string
}

export default Pagination