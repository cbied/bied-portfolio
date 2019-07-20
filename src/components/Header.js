import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <svg height="2.4rem" viewBox="0 0 512 512.001" width="2.4rem" xmlns="http://www.w3.org/2000/svg" fill="#fff" style={{ marginTop: '1.3rem'}}><path d="m465.734375 129.332031h-185.734375v-99.332031c0-16.542969-13.457031-30-30-30h-114.996094c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h114.996094c5.515625 0 10 4.484375 10 10v99.332031h-20.003906v-8.332031c0-5.523438-4.476563-10-9.996094-10-5.523438 0-10 4.476562-10 10v61h-14c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h14v63.578125l-20.875-20.875c-2.601562-2.605469-6.425781-3.566406-9.949219-2.507813l-67.101562 20.175782c-22.023438-22.046875-38.480469-27.039063-48.625-27.207032-7.460938-.125-14.003907 2.285157-18.503907 6.78125-4.496093 4.5-6.90625 11.066407-6.78125 18.5.167969 10.148438 5.160157 26.605469 27.207032 48.628907l-20.171875 67.097656c-1.0625 3.527344-.097657 7.347656 2.503906 9.953125l21.054687 21.050781c2.210938 2.214844 5.328126 3.265625 8.429688 2.835938 3.101562-.421875 5.820312-2.273438 7.355469-5l29.296875-52.058594 16.152344 15.1875 1.71875 22.199219c.183593 2.378906 1.210937 4.613281 2.898437 6.296875l19.273437 19.273437c1.890626 1.890625 4.441407 2.929688 7.070313 2.929688.550781 0 1.101563-.042969 1.652344-.136719 3.1875-.535156 5.921875-2.574219 7.335937-5.480469l15.167969-31.113281 24.890625-12.132813v82.023438h-190c-5.511719 0-10-4.488281-10-10v-221.714844c8.507812-3.015625 15.246094-9.777344 18.265625-18.285156h35.734375c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-35.734375c-3.019531-8.507812-9.757813-15.269531-18.265625-18.285156v-133.714844c0-5.515625 4.488281-10 10-10h25.003906c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-25.003906c-16.542969 0-30 13.457031-30 30v142c0 5.523438 4.476562 10 10 10 5.515625 0 10 4.484375 10 10 0 5.511719-4.484375 10-10 10-5.523438 0-10 4.476562-10 10v230c0 16.542969 13.457031 30 30 30h190v30c0 5.523438 4.476562 10 10 10h135.734375c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-125.738281v-342.667969h225.738281c14.484375 0 26.265625 11.78125 26.265625 26.265625v290.136719c0 14.484375-11.78125 26.265625-26.265625 26.265625h-20c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h20c25.511719 0 46.265625-20.753906 46.265625-46.265625v-290.136719c0-25.511718-20.753906-46.265625-46.265625-46.265625zm-282.484375 236.3125c-2.003906.976563-3.628906 2.597657-4.605469 4.605469l-10.535156 21.605469-6.746094-6.746094-1.730469-22.375c-.195312-2.484375-1.304687-4.808594-3.121093-6.515625l-28.277344-26.585938c-2.238281-2.105468-5.320313-3.0625-8.359375-2.601562-3.039062.464844-5.695312 2.300781-7.203125 4.980469l-29.09375 51.699219-7.503906-7.503907 20.207031-67.214843c1.09375-3.640626.027344-7.582032-2.746094-10.179688-22.671875-21.210938-25.296875-34.128906-25.375-38.699219-.039062-2.414062.589844-3.691406.929688-4.027343.335937-.339844 1.621094-.957032 4.023437-.925782 4.570313.074219 17.492188 2.699219 38.699219 25.371094 2.597656 2.777344 6.542969 3.839844 10.183594 2.746094l67.214844-20.207032 7.503906 7.503907-51.699219 29.09375c-2.679687 1.507812-4.515625 4.164062-4.980469 7.203125-.464844 3.039062.492188 6.125 2.601563 8.363281l26.585937 28.273437c1.707032 1.816407 4.03125 2.929688 6.511719 3.121094l22.378906 1.730469 6.746094 6.746094zm26.390625-34.035156c-1.6875-1.6875-3.921875-2.714844-6.300781-2.898437l-22.199219-1.71875-15.1875-16.152344 52.058594-29.296875c.730469-.410157 1.390625-.914063 1.988281-1.480469v61.90625zm0 0"/><path d="m366 188.261719c-50.507812 0-91.601562 41.09375-91.601562 91.601562 0 50.507813 41.089843 91.601563 91.601562 91.601563 50.507812 0 91.601562-41.089844 91.601562-91.601563 0-50.507812-41.09375-91.601562-91.601562-91.601562zm70.886719 81.601562h-18.546875c-1.144532-18.828125-5.5-35.765625-12.132813-49.210937 16.320313 11.117187 27.816407 28.796875 30.679688 49.210937zm-80.886719-56.859375v56.859375h-22.277344c1.144532-16.003906 5.003906-31.074219 10.988282-42.410156 3.390624-6.421875 7.265624-11.328125 11.289062-14.449219zm0 76.859375v56.859375c-4.023438-3.121094-7.898438-8.027344-11.289062-14.449218-5.984376-11.335938-9.84375-26.402344-10.988282-42.410157zm20 56.863281v-56.863281h22.277344c-1.148438 16.007813-5.003906 31.074219-10.988282 42.410157-3.390624 6.421874-7.265624 11.328124-11.289062 14.453124zm0-76.863281v-56.859375c4.023438 3.121094 7.898438 8.027344 11.289062 14.449219 5.984376 11.335937 9.839844 26.40625 10.988282 42.410156zm-50.207031-49.210937c-6.632813 13.445312-10.988281 30.382812-12.132813 49.210937h-18.546875c2.867188-20.414062 14.359375-38.09375 30.679688-49.210937zm-30.679688 69.210937h18.546875c1.144532 18.828125 5.5 35.765625 12.128906 49.210938-16.316406-11.117188-27.808593-28.796875-30.675781-49.210938zm111.09375 49.210938c6.632813-13.445313 10.988281-30.386719 12.132813-49.210938h18.546875c-2.863281 20.414063-14.359375 38.09375-30.679688 49.210938zm0 0"/><path d="m408.644531 396.800781h-85.289062c-5.523438 0-10 4.476563-10 10 0 5.519531 4.476562 10 10 10h85.289062c5.523438 0 10-4.480469 10-10 0-5.523437-4.476562-10-10-10zm0 0"/><path d="m408.644531 436.800781h-85.289062c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h85.289062c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10zm0 0"/><path d="m118 202h44c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-44c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"/><path d="m40 50v102c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-102c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10zm0 0"/><path d="m95 162c5.523438 0 10-4.476562 10-10v-31c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v31c0 5.523438 4.476562 10 10 10zm0 0"/><path d="m95 91c5.523438 0 10-4.476562 10-10v-31c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v31c0 5.523438 4.476562 10 10 10zm0 0"/><path d="m130 152c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-31c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10zm0 0"/><path d="m140 91c5.523438 0 10-4.476562 10-10v-31c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v31c0 5.523438 4.476562 10 10 10zm0 0"/><path d="m195 152v-102c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v102c0 5.523438 4.476562 10 10 10s10-4.476562 10-10zm0 0"/><path d="m230 91c5.519531 0 9.996094-4.476562 9.996094-10v-31c0-5.523438-4.476563-10-9.996094-10-5.523438 0-10 4.476562-10 10v31c0 5.523438 4.476562 10 10 10zm0 0"/><path d="m405.738281 492h-.007812c-5.523438 0-9.996094 4.476562-9.996094 10s4.480469 10 10.003906 10c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10zm0 0"/><path d="m95.007812 20c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-.007812c-5.523438 0-9.996094 4.476562-9.996094 10s4.480469 10 10.003906 10zm0 0"/></svg>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Chris Biediger</h1>
                <p>Coding, traveling and coding while traveling</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
