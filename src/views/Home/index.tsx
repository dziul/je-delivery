import React from 'react'

import { Container } from '~/components'

import SearchAddress from './SearchAddress'

import './styles.scss'

const HomeView: React.FC = () => {
  return (
    <div className='c-home'>
      <div className='c-home__header'>
        <Container>
          <div className='c-home__header-content'>
            <h1 className='c-home__title'>
              Bebidas geladas a preço de mercado na sua casa agora
            </h1>

            <SearchAddress />
          </div>
        </Container>
      </div>
      <div className='c-home__body'>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, quam
            eget lacinia ullamcorper, nisi purus fringilla augue, nec gravida justo tellus
            sed justo. Nunc at dapibus sapien. Mauris tincidunt dictum maximus. Duis
            cursus accumsan urna vel molestie. Donec placerat arcu orci, non porttitor
            magna tristique eget. Curabitur nec porttitor sem, eu fringilla turpis. Donec
            sit amet scelerisque urna. Phasellus vitae egestas est, a pharetra tortor.
            Praesent id nibh rutrum, aliquam justo ut, tincidunt arcu. Quisque vel neque
            sed magna tincidunt ultricies. Morbi et egestas leo, a luctus augue.
          </p>
          <p>
            Nulla vitae magna non justo blandit euismod eget a arcu. Maecenas in magna
            imperdiet, sodales leo id, lacinia lacus. In eu eleifend lorem. Morbi lobortis
            faucibus augue, ac vehicula mauris. Morbi et metus et velit sodales fringilla
            eget eget orci. Mauris pulvinar leo non erat maximus rutrum. Maecenas eget
            mauris dui. Curabitur dignissim diam in metus maximus dictum. Cras tempus
            massa at metus porta bibendum.
          </p>
          <p>
            In dapibus volutpat risus. Nunc finibus consectetur velit, sit amet dictum leo
            pellentesque egestas. Phasellus maximus massa vel arcu fringilla luctus.
            Mauris vitae sem est. Etiam purus dolor, commodo accumsan molestie non,
            eleifend ut quam. Etiam laoreet interdum varius. Morbi placerat, mauris et
            aliquet eleifend, tellus est mattis odio, et semper lacus nulla id arcu.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nunc ut tellus libero. Donec elementum justo nec turpis
            ullamcorper egestas. Nam eleifend lobortis scelerisque. Curabitur ligula nisi,
            lobortis et arcu ac, tincidunt molestie mi. Vestibulum laoreet quam at dolor
            vulputate, at egestas augue fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, quam
            eget lacinia ullamcorper, nisi purus fringilla augue, nec gravida justo tellus
            sed justo. Nunc at dapibus sapien. Mauris tincidunt dictum maximus. Duis
            cursus accumsan urna vel molestie. Donec placerat arcu orci, non porttitor
            magna tristique eget. Curabitur nec porttitor sem, eu fringilla turpis. Donec
            sit amet scelerisque urna. Phasellus vitae egestas est, a pharetra tortor.
            Praesent id nibh rutrum, aliquam justo ut, tincidunt arcu. Quisque vel neque
            sed magna tincidunt ultricies. Morbi et egestas leo, a luctus augue.
          </p>
          <p>
            Nulla vitae magna non justo blandit euismod eget a arcu. Maecenas in magna
            imperdiet, sodales leo id, lacinia lacus. In eu eleifend lorem. Morbi lobortis
            faucibus augue, ac vehicula mauris. Morbi et metus et velit sodales fringilla
            eget eget orci. Mauris pulvinar leo non erat maximus rutrum. Maecenas eget
            mauris dui. Curabitur dignissim diam in metus maximus dictum. Cras tempus
            massa at metus porta bibendum.
          </p>
          <p>
            In dapibus volutpat risus. Nunc finibus consectetur velit, sit amet dictum leo
            pellentesque egestas. Phasellus maximus massa vel arcu fringilla luctus.
            Mauris vitae sem est. Etiam purus dolor, commodo accumsan molestie non,
            eleifend ut quam. Etiam laoreet interdum varius. Morbi placerat, mauris et
            aliquet eleifend, tellus est mattis odio, et semper lacus nulla id arcu.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nunc ut tellus libero. Donec elementum justo nec turpis
            ullamcorper egestas. Nam eleifend lobortis scelerisque. Curabitur ligula nisi,
            lobortis et arcu ac, tincidunt molestie mi. Vestibulum laoreet quam at dolor
            vulputate, at egestas augue fringilla.
          </p>
        </Container>
      </div>
    </div>
  )
}

export default HomeView
