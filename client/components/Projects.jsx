import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projects twelve columns'>
        <div className='pad-left-sm'>
          <h1 className='mar-bot-sm'>Recent Projects</h1>
          <p>Many more can be found on GitHub<a href='https://github.com/garrettstott' target='_blank'><i className='pad-left-sm fa fa-github'></i></a></p>
        </div>

        <div className='eight columns offset-by-two'>

          <div className='twelve columns'>
            <div className='four columns project belcher' title='Belcher'>
              <a href='http://belcher.herokuapp.com' target='_blank'>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
              <a href='https://github.com/justinewalt/belcher' target='_blank' title='GitHub'>
                <i className='fa fa-github'></i>
              </a>
            </div>


            <div className='four columns project avblog' title='Rails Blog App'>
              <a href='http://aegrescovitaeblog.herokuapp.com' target='_blank'>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
              <a href='https://github.com/garrettstott/Alpha_Blog' target='_blank' title='GitHub'>
                <i className='fa fa-github'></i>
              </a>
            </div>


            <div className='four columns project avrecipes' title='Rails Recipe App'>
              <a href='http://aegrescovitaerecipes.herokuapp.com' target='_blank'>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
              <a href='https://github.com/garrettstott/myRecipes' target='_blank' title='GitHub'>
                <i className='fa fa-github'></i>
              </a>
            </div>

          </div>

          <div className='twelve columns'>

            <div className='four columns project avstocks' title='Rails Stocks App'>
              <a href='http://aegrescovitaestocktracker.herokuapp.com' target='_blank'>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
              <a href='https://github.com/garrettstott/finance-tracker' target='_blank' title='GitHub'>
                <i className='fa fa-github'></i>
              </a>
            </div>

            <div className='four columns project avphotoapp' title='Rails Photo App'>
              <a href='http://aegrescovitaephotoapp.herokuapp.com' target='_blank'>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
              <a href='https://github.com/garrettstott/photo_app' target='_blank' title='GitHub'>
                <i className='fa fa-github'></i>
              </a>
            </div>


            <div className='four columns project avsaas' title='Rails SaaS App'>
              <a href='http://aegrescovitaesaas.herokuapp.com/' target='_blank'>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
              <a href='https://github.com/garrettstott/saas-project' target='_blank' title='GitHub'>
                <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
