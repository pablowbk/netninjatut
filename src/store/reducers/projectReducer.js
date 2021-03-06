const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'EMFLMw lAKLML KFe lK FLA KLFkAMF'},
    {id: '2', title: 'collect all the starts', content: 'EMFLMw lAKLML KFe lK FLA KLFkAMF'},
    {id: '3', title: 'egg hunt with Yoshi', content: 'EMFLMw lAKLML KFe lK FLA KLFkAMF'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;
