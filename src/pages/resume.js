import React from 'react'

import * as S from '../components/Post/styled'
import './styled.css'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { Html5 } from '@styled-icons/boxicons-logos/Html5'
import { Css3 } from '@styled-icons/boxicons-logos/Css3'
import { Sass } from '@styled-icons/fa-brands/Sass'
import { Bootstrap } from '@styled-icons/boxicons-logos/Bootstrap'
import { Javascript } from '@styled-icons/boxicons-logos/Javascript'
import { Jquery } from '@styled-icons/boxicons-logos/Jquery'
import { ReactLogo as ReactJS} from '@styled-icons/boxicons-logos/ReactLogo'
import { Redux } from '@styled-icons/boxicons-logos/Redux'
import { Gatsby } from '@styled-icons/remix-fill/Gatsby'
import { Jest } from '@styled-icons/simple-icons/Jest'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'
import { Java } from '@styled-icons/fa-brands/Java'
import { Spring } from '@styled-icons/simple-icons/Spring'
import { Flutter } from '@styled-icons/remix-fill/Flutter'
import { LogoFirebase as Firebase} from '@styled-icons/ionicons-solid/LogoFirebase'
import { Mysql } from '@styled-icons/simple-icons/Mysql'
import { Postgresql } from '@styled-icons/simple-icons/Postgresql'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Aws } from '@styled-icons/fa-brands/Aws'
import { Docker } from '@styled-icons/fa-brands/Docker'
import { Circleci } from '@styled-icons/simple-icons/Circleci'
import { Netlify } from '@styled-icons/simple-icons/Netlify'

const ResumePage = () => (
    <Layout>
        <SEO title="Resume" />
        <S.PostHeader>
                <S.PostTitle>Stacks</S.PostTitle>
            </S.PostHeader>
            <S.MainContent>
            <S.PostDescription>Front-End</S.PostDescription>
                <ul>
                    <li><Html5 width="30px" height="30px"/> HTML</li>
                    <li><Css3 width="30px" height="30px"/> CSS</li>
                    <li><Sass width="30px" height="30px"/> SASS</li>
                    <li><Bootstrap width="30px" height="30px"/> Bootstrap</li>
                    <li><Javascript width="30px" height="30px"/> Javascript</li>
                    <li><Jquery width="30px" height="30px"/> jQuery</li>
                    <li><ReactJS width="30px" height="30px"/> ReactJS</li>
                    <li><Gatsby width="30px" height="30px"/> Gatsby</li>
                    <li><Redux width="30px" height="30px"/> Redux</li>
                </ul>
            <S.PostDescription>Back-End</S.PostDescription>
                <ul>
                    <li><Nodejs width="30px" height="30px"/> NodeJS</li>
                    <li><Java width="30px" height="30px"/> Java</li>
                    <li><Spring width="30px" height="30px"/> Spring</li>
                </ul>
            <S.PostDescription>Test</S.PostDescription>
                <ul>
                    <li><Jest width="30px" height="30px"/> Jest</li>
                </ul>
            <S.PostDescription>Database</S.PostDescription>
                <ul>
                    <li><Mysql width="30px" height="30px"/> Mysql</li>
                    <li><Postgresql width="30px" height="30px"/> Postgresql</li>
                    <li><Mongodb width="30px" height="30px"/> Mongodb</li>
                    <li><Firebase width="30px" height="30px"/> Firebase</li>
                </ul>
            <S.PostDescription>Mobile</S.PostDescription>
                <ul>
                    <li><ReactJS width="30px" height="30px"/> React-Native</li>
                    <li><Flutter width="30px" height="30px"/> Flutter</li>
                </ul>
            <S.PostDescription>Other Stacks</S.PostDescription>
                <ul>
                    <li><Github width="30px" height="30px"/> GitHub</li>
                    <li><Aws width="30px" height="30px"/> AWS</li>
                    <li><Docker width="30px" height="30px"/> Docker</li>
                    <li><Netlify width="30px" height="30px"/> Netlify</li>
                    <li><Circleci width="30px" height="30px"/> CircleCI</li>
                </ul>
            </S.MainContent>
    </Layout>
)

export default ResumePage