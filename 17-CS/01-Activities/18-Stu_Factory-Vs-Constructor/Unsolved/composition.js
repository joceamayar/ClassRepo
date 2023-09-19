const informationFuntionality = (state) => ({
    information: () => console.log(state.title, state.description)
  });
  
  const Lesson = (title, description) => {
   const state = {
    title,
    description,
   }
  
    return {...informationFuntionality(state) };
  };
  

  let newLesson  = Lesson ("cs fundamentals", "fundamentals of cs");
  newLesson.information()

 