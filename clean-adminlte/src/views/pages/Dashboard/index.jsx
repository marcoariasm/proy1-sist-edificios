import React from 'react';
import Breadcrumb from '../../../components/commons/Breadcrumb';
import SmallBoxInfo from '../../../components/SmallBoxInfo';
import Card from './../../../components/commons/Card';
import Dona from './../../../components/charts/Dona/index';

const textDashboard = {
  title: 'Dashboard',
};

const breadcrumbs = [
  { link: '!#', text: 'Home', active: true },
  { link: '!#', text: 'Dashboard', active: false },
];

const supText = (
  <>
    53<sup style={{ fontSize: '20px' }}>%</sup>
  </>
);

const colSmallBoxInfo = [
  {
    bgColor: 'success',
    // quantity: `53 ${supText}`,
    quantity: supText,
    title: 'Tasa de rebote',
    icon: 'ion ion-stats-bars',
    link: '',
  },
  {
    bgColor: 'info',
    quantity: 150,
    title: 'New Orders',
    icon: 'ion ion-bag',
    link: '',
  },
  {
    bgColor: 'warning',
    quantity: 44,
    title: 'Usuarios nuevos',
    icon: 'ion ion-person-add',
    link: '',
  },
  {
    bgColor: 'danger',
    quantity: '65',
    title: 'Visitantes únicos',
    icon: 'ion ion-pie-graph',
    link: '',
  },
];

const dataDona = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const toolsMorrisJs = (
  <ul className='nav nav-pills ml-auto'>
    <li className='nav-item'>
      <a className='nav-link active' href='#revenue-chart' data-toggle='tab'>
        Area
      </a>
    </li>
    <li className='nav-item'>
      <a className='nav-link' href='#sales-chart' data-toggle='tab'>
        Donut
      </a>
    </li>
  </ul>
);

const bodyMorrisJs = (
  <div className='tab-content p-0'>
    {/* Morris chart - Sales */}
    <div
      className='chart tab-pane active'
      id='revenue-chart'
      style={{ position: 'relative', height: 300 }}
    >
      <canvas id='revenue-chart-canvas' height={300} style={{ height: 300 }} />
    </div>
    <div
      className='chart tab-pane'
      id='sales-chart'
      style={{ position: 'relative', height: 300 }}
    >
      <canvas id='sales-chart-canvas' height={300} style={{ height: 300 }} />
    </div>
  </div>
);

const toolsChat = (
  <>
    <span title='3 New Messages' className='badge badge-primary'>
      3
    </span>
    <button type='button' className='btn btn-tool' data-card-widget='collapse'>
      <i className='fas fa-minus' />
    </button>
    <button
      type='button'
      className='btn btn-tool'
      title='Contacts'
      data-widget='chat-pane-toggle'
    >
      <i className='fas fa-comments' />
    </button>
    <button type='button' className='btn btn-tool' data-card-widget='remove'>
      <i className='fas fa-times' />
    </button>
  </>
);

const bodyChat = (
  <>
    <div className='direct-chat-messages'>
      {/* Message. Default to the left */}
      <div className='direct-chat-msg'>
        <div className='direct-chat-infos clearfix'>
          <span className='direct-chat-name float-left'>Alexander Pierce</span>
          <span className='direct-chat-timestamp float-right'>
            23 Jan 2:00 pm
          </span>
        </div>
        {/* /.direct-chat-infos */}
        <img
          className='direct-chat-img'
          src='dist/img/user1-128x128.jpg'
          alt='message user'
        />
        {/* /.direct-chat-img */}
        <div className='direct-chat-text'>
          Is this template really for free? That's unbelievable!
        </div>
        {/* /.direct-chat-text */}
      </div>
      {/* /.direct-chat-msg */}
      {/* Message to the right */}
      <div className='direct-chat-msg right'>
        <div className='direct-chat-infos clearfix'>
          <span className='direct-chat-name float-right'>Sarah Bullock</span>
          <span className='direct-chat-timestamp float-left'>
            23 Jan 2:05 pm
          </span>
        </div>
        {/* /.direct-chat-infos */}
        <img
          className='direct-chat-img'
          src='dist/img/user3-128x128.jpg'
          alt='message user'
        />
        {/* /.direct-chat-img */}
        <div className='direct-chat-text'>You better believe it!</div>
        {/* /.direct-chat-text */}
      </div>
      {/* /.direct-chat-msg */}
      {/* Message. Default to the left */}
      <div className='direct-chat-msg'>
        <div className='direct-chat-infos clearfix'>
          <span className='direct-chat-name float-left'>Alexander Pierce</span>
          <span className='direct-chat-timestamp float-right'>
            23 Jan 5:37 pm
          </span>
        </div>
        {/* /.direct-chat-infos */}
        <img
          className='direct-chat-img'
          src='dist/img/user1-128x128.jpg'
          alt='message user'
        />
        {/* /.direct-chat-img */}
        <div className='direct-chat-text'>
          Working with AdminLTE on a great new app! Wanna join?
        </div>
        {/* /.direct-chat-text */}
      </div>
      {/* /.direct-chat-msg */}
      {/* Message to the right */}
      <div className='direct-chat-msg right'>
        <div className='direct-chat-infos clearfix'>
          <span className='direct-chat-name float-right'>Sarah Bullock</span>
          <span className='direct-chat-timestamp float-left'>
            23 Jan 6:10 pm
          </span>
        </div>
        {/* /.direct-chat-infos */}
        <img
          className='direct-chat-img'
          src='dist/img/user3-128x128.jpg'
          alt='message user'
        />
        {/* /.direct-chat-img */}
        <div className='direct-chat-text'>I would love to.</div>
        {/* /.direct-chat-text */}
      </div>
      {/* /.direct-chat-msg */}
    </div>
    {/*/.direct-chat-messages*/}
    {/* Contacts are loaded here */}
    <div className='direct-chat-contacts'>
      <ul className='contacts-list'>
        <li>
          <a href='!#'>
            <img
              className='contacts-list-img'
              src='dist/img/user1-128x128.jpg'
              alt='User Avatar'
            />
            <div className='contacts-list-info'>
              <span className='contacts-list-name'>
                Count Dracula
                <small className='contacts-list-date float-right'>
                  2/28/2015
                </small>
              </span>
              <span className='contacts-list-msg'>
                How have you been? I was...
              </span>
            </div>
            {/* /.contacts-list-info */}
          </a>
        </li>
        {/* End Contact Item */}
        <li>
          <a href='!#'>
            <img
              className='contacts-list-img'
              src='dist/img/user7-128x128.jpg'
              alt='User Avatar'
            />
            <div className='contacts-list-info'>
              <span className='contacts-list-name'>
                Sarah Doe
                <small className='contacts-list-date float-right'>
                  2/23/2015
                </small>
              </span>
              <span className='contacts-list-msg'>
                I will be waiting for...
              </span>
            </div>
            {/* /.contacts-list-info */}
          </a>
        </li>
        {/* End Contact Item */}
        <li>
          <a href='!#'>
            <img
              className='contacts-list-img'
              src='dist/img/user3-128x128.jpg'
              alt='User Avatar'
            />
            <div className='contacts-list-info'>
              <span className='contacts-list-name'>
                Nadia Jolie
                <small className='contacts-list-date float-right'>
                  2/20/2015
                </small>
              </span>
              <span className='contacts-list-msg'>
                I'll call you back at...
              </span>
            </div>
            {/* /.contacts-list-info */}
          </a>
        </li>
        {/* End Contact Item */}
        <li>
          <a href='!#'>
            <img
              className='contacts-list-img'
              src='dist/img/user5-128x128.jpg'
              alt='User Avatar'
            />
            <div className='contacts-list-info'>
              <span className='contacts-list-name'>
                Nora S. Vans
                <small className='contacts-list-date float-right'>
                  2/10/2015
                </small>
              </span>
              <span className='contacts-list-msg'>Where is your new...</span>
            </div>
            {/* /.contacts-list-info */}
          </a>
        </li>
        {/* End Contact Item */}
        <li>
          <a href='!#'>
            <img
              className='contacts-list-img'
              src='dist/img/user6-128x128.jpg'
              alt='User Avatar'
            />
            <div className='contacts-list-info'>
              <span className='contacts-list-name'>
                John K.
                <small className='contacts-list-date float-right'>
                  1/27/2015
                </small>
              </span>
              <span className='contacts-list-msg'>Can I take a look at...</span>
            </div>
            {/* /.contacts-list-info */}
          </a>
        </li>
        {/* End Contact Item */}
        <li>
          <a href='!#'>
            <img
              className='contacts-list-img'
              src='dist/img/user8-128x128.jpg'
              alt='User Avatar'
            />
            <div className='contacts-list-info'>
              <span className='contacts-list-name'>
                Kenneth M.
                <small className='contacts-list-date float-right'>
                  1/4/2015
                </small>
              </span>
              <span className='contacts-list-msg'>Never mind I found...</span>
            </div>
            {/* /.contacts-list-info */}
          </a>
        </li>
        {/* End Contact Item */}
      </ul>
      {/* /.contacts-list */}
    </div>
  </>
);

const footerChat = (
  <form action='!#' method='post'>
    <div className='input-group'>
      <input
        type='text'
        name='message'
        placeholder='Type Message ...'
        className='form-control'
      />
      <span className='input-group-append'>
        <button type='button' className='btn btn-primary'>
          Send
        </button>
      </span>
    </div>
  </form>
);

const toolsToDoList = (
  <ul className='pagination pagination-sm'>
    <li className='page-item'>
      <a href='!#' className='page-link'>
        «
      </a>
    </li>
    <li className='page-item'>
      <a href='!#' className='page-link'>
        1
      </a>
    </li>
    <li className='page-item'>
      <a href='!#' className='page-link'>
        2
      </a>
    </li>
    <li className='page-item'>
      <a href='!#' className='page-link'>
        3
      </a>
    </li>
    <li className='page-item'>
      <a href='!#' className='page-link'>
        »
      </a>
    </li>
  </ul>
);

const bodyToDoList = (
  <ul className='todo-list' data-widget='todo-list'>
    <li>
      {/* drag handle */}
      <span className='handle'>
        <i className='fas fa-ellipsis-v' />
        <i className='fas fa-ellipsis-v' />
      </span>
      {/* checkbox */}
      <div className='icheck-primary d-inline ml-2'>
        <input type='checkbox' defaultValue name='todo1' id='todoCheck1' />
        <label htmlFor='todoCheck1' />
      </div>
      {/* todo text */}
      <span className='text'>Design a nice theme</span>
      {/* Emphasis label */}
      <small className='badge badge-danger'>
        <i className='far fa-clock' /> 2 mins
      </small>
      {/* General tools such as edit or delete*/}
      <div className='tools'>
        <i className='fas fa-edit' />
        <i className='fas fa-trash-o' />
      </div>
    </li>
    <li>
      <span className='handle'>
        <i className='fas fa-ellipsis-v' />
        <i className='fas fa-ellipsis-v' />
      </span>
      <div className='icheck-primary d-inline ml-2'>
        <input
          type='checkbox'
          defaultValue
          name='todo2'
          id='todoCheck2'
          defaultChecked
        />
        <label htmlFor='todoCheck2' />
      </div>
      <span className='text'>Make the theme responsive</span>
      <small className='badge badge-info'>
        <i className='far fa-clock' /> 4 hours
      </small>
      <div className='tools'>
        <i className='fas fa-edit' />
        <i className='fas fa-trash-o' />
      </div>
    </li>
    <li>
      <span className='handle'>
        <i className='fas fa-ellipsis-v' />
        <i className='fas fa-ellipsis-v' />
      </span>
      <div className='icheck-primary d-inline ml-2'>
        <input type='checkbox' defaultValue name='todo3' id='todoCheck3' />
        <label htmlFor='todoCheck3' />
      </div>
      <span className='text'>Let theme shine like a star</span>
      <small className='badge badge-warning'>
        <i className='far fa-clock' /> 1 day
      </small>
      <div className='tools'>
        <i className='fas fa-edit' />
        <i className='fas fa-trash-o' />
      </div>
    </li>
    <li>
      <span className='handle'>
        <i className='fas fa-ellipsis-v' />
        <i className='fas fa-ellipsis-v' />
      </span>
      <div className='icheck-primary d-inline ml-2'>
        <input type='checkbox' defaultValue name='todo4' id='todoCheck4' />
        <label htmlFor='todoCheck4' />
      </div>
      <span className='text'>Let theme shine like a star</span>
      <small className='badge badge-success'>
        <i className='far fa-clock' /> 3 days
      </small>
      <div className='tools'>
        <i className='fas fa-edit' />
        <i className='fas fa-trash-o' />
      </div>
    </li>
    <li>
      <span className='handle'>
        <i className='fas fa-ellipsis-v' />
        <i className='fas fa-ellipsis-v' />
      </span>
      <div className='icheck-primary d-inline ml-2'>
        <input type='checkbox' defaultValue name='todo5' id='todoCheck5' />
        <label htmlFor='todoCheck5' />
      </div>
      <span className='text'>Check your messages and notifications</span>
      <small className='badge badge-primary'>
        <i className='far fa-clock' /> 1 week
      </small>
      <div className='tools'>
        <i className='fas fa-edit' />
        <i className='fas fa-trash-o' />
      </div>
    </li>
    <li>
      <span className='handle'>
        <i className='fas fa-ellipsis-v' />
        <i className='fas fa-ellipsis-v' />
      </span>
      <div className='icheck-primary d-inline ml-2'>
        <input type='checkbox' defaultValue name='todo6' id='todoCheck6' />
        <label htmlFor='todoCheck6' />
      </div>
      <span className='text'>Let theme shine like a star</span>
      <small className='badge badge-secondary'>
        <i className='far fa-clock' /> 1 month
      </small>
      <div className='tools'>
        <i className='fas fa-edit' />
        <i className='fas fa-trash-o' />
      </div>
    </li>
  </ul>
);

const footerToDoList = (
  <button type='button' className='btn btn-primary float-right'>
    <i className='fas fa-plus' /> Añadir item
  </button>
);

// main component
const Dashboard = () => {
  const { title } = { ...textDashboard };

  return (
    <div className='content-wrapper'>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0'>{'Módulos'}</h1>
            </div>

            {/* <Breadcrumb breadcrumbs={} /> */}
          </div>
        </div>
      </div>

      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 col-sm-6 col-12'>
              {/* tarjeta registro de pacientes */}
              {/* envolver en un tag a */}
              <a href='/patients'>
                <div className='info-box bg-gradient-info'>
                  <span className='info-box-icon'>
                    <i className='fas fa-bed' />
                  </span>
                  {/* poner la clase text-white */}
                  <div className='info-box-content text-white'>
                    <span className='info-box-text'>Registro de Pacientes</span>
                    <span className='info-box-number'>41,410</span>
                    <div className='progress'>
                      <div className='progress-bar' style={{ width: '70%' }} />
                    </div>
                    <span className='progress-description'>
                      70% Increase in 30 Days
                    </span>
                  </div>
                </div>
              </a>
              {/* fin tarjeta */}
            </div>
            <div className='col-md-3 col-sm-6 col-12'>
              <div className='info-box bg-gradient-primary'>
                <span className='info-box-icon'>
                  <i className='far fa-calendar-alt' />
                </span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Agendar Cita</span>
                  <span className='info-box-number'>41,410</span>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '70%' }} />
                  </div>
                  <span className='progress-description'>
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12'>
              <div className='info-box bg-gradient-secondary'>
                <span className='info-box-icon'>
                  <i className='fas fa-stethoscope' />
                </span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Doctores</span>
                  <span className='info-box-number'>41,410</span>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '70%' }} />
                  </div>
                  <span className='progress-description'>
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12'>
              <div className='info-box bg-gradient-success'>
                <span className='info-box-icon'>
                  <i className='fas fa-book-medical' />
                </span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Historia Clínica</span>
                  <span className='info-box-number'>41,410</span>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '70%' }} />
                  </div>
                  <span className='progress-description'>
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12'>
              <div className='info-box bg-gradient-warning'>
                <span className='info-box-icon'>
                  <i className='far fa-calendar-alt' />
                </span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Events</span>
                  <span className='info-box-number'>41,410</span>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '70%' }} />
                  </div>
                  <span className='progress-description'>
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12'>
              <div className='info-box bg-gradient-danger'>
                <span className='info-box-icon'>
                  <i className='fas fa-tachometer-alt' />
                </span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Tableros de Control</span>
                  <span className='info-box-number'>41,410</span>
                  <div className='progress'>
                    <div className='progress-bar' style={{ width: '70%' }} />
                  </div>
                  <span className='progress-description'>
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Content Header (Page header) */}
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0'>{title}</h1>
            </div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
          </div>
        </div>
      </div>


      {/* Main content */}
      <section className='content'>
        <div className='container-fluid'>
          {/* Small boxes (Stat box) */}
          <div className='row'>
            {colSmallBoxInfo.map((sbi) => {
              return (
                //     <Column classes="col-lg-3 col-6">
                <div className='col-lg-3 col-6'>
                  <SmallBoxInfo
                    bgColor={sbi.bgColor}
                    quantity={sbi.quantity}
                    title={sbi.title}
                    icon={sbi.icon}
                    link={sbi.link}
                  />
                </div>
              );
            })}
          </div>

          {/* Main row */}
          <div className='row'>
            <section className='col-lg-6 connectedSortable'>
              <Card title={'Compras'} body={<Dona data={dataDona} />} />
            </section>
            <section className='col-lg-6 connectedSortable'></section>
          </div>

          <div className='row'>
            {/* Left col */}
            <section className='col-lg-7 connectedSortable'>
              {/* Custom tabs (Charts with tabs)*/}
              <Card
                title={'Ventas'}
                iconTitle={'fas fa-chart-pie'}
                tools={toolsMorrisJs}
                body={bodyMorrisJs}
              />

              {/* DIRECT CHAT */}
              <Card
                classesCard={'direct-chat direct-chat-primary'}
                title={'Chat directo'}
                tools={toolsChat}
                body={bodyChat}
                footer={footerChat}
              />

              {/* TO DO List */}
              <Card
                title={'To Do List'}
                iconTitle={'ion ion-clipboard'}
                tools={toolsToDoList}
                body={bodyToDoList}
                footer={footerToDoList}
                classesFooter={'clearfix'}
              />
            </section>
            {/* /.Left col */}

            {/* right col (We are only adding the ID to make the widgets sortable)*/}
            <section className='col-lg-5 connectedSortable'>
              {/* Map card */}

              <div className='card bg-gradient-primary'>
                <div className='card-header border-0'>
                  <h3 className='card-title'>
                    <i className='fas fa-map-marker-alt mr-1' />
                    Visitors
                  </h3>
                  {/* card tools */}
                  <div className='card-tools'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm daterange'
                      title='Date range'
                    >
                      <i className='far fa-calendar-alt' />
                    </button>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm'
                      data-card-widget='collapse'
                      title='Collapse'
                    >
                      <i className='fas fa-minus' />
                    </button>
                  </div>
                  {/* /.card-tools */}
                </div>
                <div className='card-body'>
                  <div id='world-map' style={{ height: 250, width: '100%' }} />
                </div>
                {/* /.card-body*/}
                <div className='card-footer bg-transparent'>
                  <div className='row'>
                    <div className='col-4 text-center'>
                      <div id='sparkline-1' />
                      <div className='text-white'>Visitors</div>
                    </div>
                    {/* ./col */}
                    <div className='col-4 text-center'>
                      <div id='sparkline-2' />
                      <div className='text-white'>Online</div>
                    </div>
                    {/* ./col */}
                    <div className='col-4 text-center'>
                      <div id='sparkline-3' />
                      <div className='text-white'>Sales</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>
              </div>
              {/* /.card */}
              {/* solid sales graph */}
              <div className='card bg-gradient-info'>
                <div className='card-header border-0'>
                  <h3 className='card-title'>
                    <i className='fas fa-th mr-1' />
                    Sales Graph
                  </h3>
                  <div className='card-tools'>
                    <button
                      type='button'
                      className='btn bg-info btn-sm'
                      data-card-widget='collapse'
                    >
                      <i className='fas fa-minus' />
                    </button>
                    <button
                      type='button'
                      className='btn bg-info btn-sm'
                      data-card-widget='remove'
                    >
                      <i className='fas fa-times' />
                    </button>
                  </div>
                </div>
                <div className='card-body'>
                  <canvas
                    className='chart'
                    id='line-chart'
                    style={{
                      minHeight: 250,
                      height: 250,
                      maxHeight: 250,
                      maxWidth: '100%',
                    }}
                  />
                </div>
                {/* /.card-body */}
                <div className='card-footer bg-transparent'>
                  <div className='row'>
                    <div className='col-4 text-center'>
                      <input
                        type='text'
                        className='knob'
                        data-readonly='true'
                        defaultValue={20}
                        data-width={60}
                        data-height={60}
                        data-fgcolor='!#39CCCC'
                      />
                      <div className='text-white'>Mail-Orders</div>
                    </div>
                    {/* ./col */}
                    <div className='col-4 text-center'>
                      <input
                        type='text'
                        className='knob'
                        data-readonly='true'
                        defaultValue={50}
                        data-width={60}
                        data-height={60}
                        data-fgcolor='!#39CCCC'
                      />
                      <div className='text-white'>Online</div>
                    </div>
                    {/* ./col */}
                    <div className='col-4 text-center'>
                      <input
                        type='text'
                        className='knob'
                        data-readonly='true'
                        defaultValue={30}
                        data-width={60}
                        data-height={60}
                        data-fgcolor='!#39CCCC'
                      />
                      <div className='text-white'>In-Store</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
              {/* Calendar */}
              <div className='card bg-gradient-success'>
                <div className='card-header border-0'>
                  <h3 className='card-title'>
                    <i className='far fa-calendar-alt' />
                    Calendar
                  </h3>
                  {/* tools card */}
                  <div className='card-tools'>
                    {/* button with a dropdown */}
                    <div className='btn-group'>
                      <button
                        type='button'
                        className='btn btn-success btn-sm dropdown-toggle'
                        data-toggle='dropdown'
                        data-offset={-52}
                      >
                        <i className='fas fa-bars' />
                      </button>
                      <div className='dropdown-menu' role='menu'>
                        <a href='!#' className='dropdown-item'>
                          Add new event
                        </a>
                        <a href='!#' className='dropdown-item'>
                          Clear events
                        </a>
                        <div className='dropdown-divider' />
                        <a href='!#' className='dropdown-item'>
                          View calendar
                        </a>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='btn btn-success btn-sm'
                      data-card-widget='collapse'
                    >
                      <i className='fas fa-minus' />
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm'
                      data-card-widget='remove'
                    >
                      <i className='fas fa-times' />
                    </button>
                  </div>
                  {/* /. tools */}
                </div>
                {/* /.card-header */}
                <div className='card-body pt-0'>
                  {/*The calendar */}
                  <div id='calendar' style={{ width: '100%' }} />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </section>
            {/* right col */}
          </div>
          {/* /.row (main row) */}
        </div>
        {/* /.container-fluid */}
      </section>
    </div>
  );
};

export default Dashboard;
