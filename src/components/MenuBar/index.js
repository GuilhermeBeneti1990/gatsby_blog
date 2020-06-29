import React, { useState, useEffect } from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { Search } from '@styled-icons/boxicons-regular/Search'
import { CaretUpCircle } from '@styled-icons/boxicons-solid/CaretUpCircle'
import { LightBulb } from '@styled-icons/entypo/LightBulb'
import { LayoutGrid } from '@styled-icons/remix-fill/LayoutGrid'
import { List } from '@styled-icons/fa-solid/List'

import * as S from './styled'

const MenuBar = () => {

    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === 'dark'
    const isListMode = display === 'list'

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)

        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])
    
    return (
        <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Home">
                <S.MenuBarItem>
                    <Home />
                </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="Search">
                <S.MenuBarItem>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Change theme" onClick={() => {
                window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }} className={theme}>
                <LightBulb />
            </S.MenuBarItem>
            <S.MenuBarItem title="Change view mode" onClick={() => {
                window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
            }} className="display">
                {isListMode ? <LayoutGrid /> : <List />}
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
    )
}

export default MenuBar