const gamePromptPage = {
  data: [
    {
      id: 0,
      text: `Select your role. Choose betweeen 2 men who are 40, and 50 respectively and both white.\n\nDid you know that 7.4% of all engineering managers are women, while 92.6% are men and the most common ethnicity of engineering managers is white at 71.0%?`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 1,
      option1text: `40 year old manager`,
      option2ID: 2,
      option2text: `50 year old manager`,
    },
    {
      id: 1,
      text:  `Your name is John, a 40 year old manager recently promoted at Avengers4U.\n\nYou’re first task is to hire a new software developer to join your team.\n\nThis is your first time hiring someone. You want to make a good impression on your team. The Talent Acquisition Specialist at Avengers4U offers you some resources to assist with hiring.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 3,
      option1text: `You respectfully decline`,
      option2ID: 4,
      option2text: `You gladly take them up on their offer`
    },
    {
      id: 2,
      text: `Your name is William, a 50 year old manager recently promoted at Avengers4U.\n\nYou’re first task is to hire a new software developer to join your team. This is your first time hiring someone. You want to make a good impression on your team. \n\nThe Talent Acquisition Specialist at Avengers4U offers you some resources to assist with hiring.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 3,
      option1text: `You respectfully decline`,
      option2ID: 4,
      option2text: `You gladly take them up on their offer `
    },
    {
      id: 3,
      text: `You decide that you are more than capable of making the hiring decision yourself. After all, you’ve been an applicant before. How hard can this be?
      
      \nYou start by drafting the job description. You highlight the company’s commitment to diversity, aiming to attract a wide range of talented individuals.\nYou begin to picture the ideal candidate: A software engineer with 5 years of work experience that is not afraid to push the envelope. An ambitious and driven individual, active in the software development life cycle.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText:`Add alt text`,
      option1ID: 5,
      option1text: `You add these qualifications in the job description`,
      isTransition: true
    },
    {
      id: 4,
      text: `You decide to ask the Talent Acquisition Specialist for advice. Maura is glad that you reached out!

      \nMaura tells you that the job posting reflects implicit biases. Surprised, she continues that the word embeddings used by the Google News dataset answered the analogy that a man is a computer programmer and a woman is a homemaker. She explains that word embeddings are a way of representing words for text analysis in the form of real-valued vectors. These vectors preserve semantic and syntactic information, but they can also reflect social biases. 

      \nThe model trained on the Google News dataset, for example, associated certain occupations more closely with one gender than the other, reinforcing stereotypes. This is why it's crucial to use language that doesn’t promote implicit biases, especially in the context of algorithms. Algorithms, particularly those used in natural language processing (NLP) and machine learning, can amplify biases present in the data they are trained on. 

      \nIf job postings use biased language, these biases can be learned and perpetuated by the algorithms, leading to unfair outcomes in candidate selection.

      \nCommunal traits are typically associated with behaviors that involve nurturing, caring, and connecting with others. These traits are often stereotypically attributed to women, reflecting societal expectations around care giving and emotional labor. In job postings, communal language might include words like "collaborate," "support," and "connect," which can be seen as more inclusive and appealing to a diverse audience.
      
      \nOn the other hand, agentic traits are associated with behaviors that involve assertiveness, independence, and achievement. These traits are often stereotypically attributed to men, reflecting societal expectations around leadership and competitiveness. In job postings, agentic language might include words like "ambitious," "driven," and "active”. 
      
     \nMaura adds that the job portal at Avengers4U extrapolates the information from the job posting to show the job to the ideal candidate. 
     
      \nIn this case,  male applicants were more likely to see the job posting due to the use of agentic words. 
      
      \nYou thank Maura for her help. You can't believe how naive you were. You decide to craft a job posting without the use of agentic words.
      `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 8,
      option1text: `You post the job posting on the job portal without approval`,
      option2ID: 7,
      option2text: `You ask HR for approval before proceeding`
    },
    {
      id: 5,
      text: `You want to get a new team member hired as soon as possible so you can move one to other tasks. 
      
      \nYou decide to write the job description as you decided, without getting approval from Talent Acquisition.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 6,
      option1text: `You are done writing the job posting.`,
      isTransition: true
    },
    {
      id: 6,
      text: ` Maura tells you that the job posting reflects implicit biases. Surprised, she continues that the word embeddings used by the Google News dataset answered the analogy that a man is a computer programmer and a woman is a homemaker. 
      
      \nShe explains that word embeddings are a way of representing words for text analysis in the form of real-valued vectors. These vectors preserve semantic and syntactic information, but they can also reflect social biases. 
      The model trained on the Google News dataset, for example, associated certain occupations more closely with one gender than the other, reinforcing stereotypes. 

      \nThis is why it's crucial to use language that doesn’t promote implicit biases, especially in the context of algorithms. Algorithms, particularly those used in natural language processing (NLP) and machine learning, can amplify biases present in the data they are trained on. 
      If job postings use biased language, these biases can be learned and perpetuated by the algorithms, leading to unfair outcomes in candidate selection.

      \nCommunal traits are typically associated with behaviors that involve nurturing, caring, and connecting with others. These traits are often stereotypically attributed to women, reflecting societal expectations around care giving and emotional labor. 
      In job postings, communal language might include words like "collaborate," "support," and "connect," which can be seen as more inclusive and appealing to a diverse audience.

      \nOn the other hand, agentic traits are associated with behaviors that involve assertiveness, independence, and achievement. These traits are often stereotypically attributed to men, reflecting societal expectations around leadership and competitiveness. 
      In job postings, agentic language might include words like "ambitious," "driven," and "active”. 
      
      \nMaura adds that the job portal at Avengers4U extrapolates the information from the job posting to show the job to the ideal candidate. 
      In this case,  male applicants were more likely to see the job posting due to the use of agentic words. 
      You are surprised to hear this and Maura is disappointed that you did not take up on her offer for help.
      
      \nConsequently, Maura decides to takes over the hiring process. 

      \nYou are disappointed in yourself.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    
    {
      id: 7,
      text: `Maura is glad you asked for approval. She recommends a tool named Textio, an augmented writing platform that employs AI to mitigate biased language in job descriptions. 
      
      \nShe explains that Textio uses natural language processing (NLP) to analyze job postings and suggest alternative language that is more inclusive and appealing to a diverse audience. 
      
      \nIntrigued by the recommendation, you decide to give Textio a try, appreciating the opportunity to leverage technology to address the biases in your job posting.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 9,
      option1text: `You try using Textio`,
      option2ID: 8,
      option2text: "You try to take a shortcut and avoid using Textio",
    },
    {
      id: 8,
      text: `Maura is disappointed that you did not ask for approval. She explains that Textio is a tool they run job postings by to detect biased language and suggest alternative language. 
      This way, the job posting can be appealing to a diverse audience. 

      \nYou are disappointed that you did not ask for approval. It is important that the most qualified candidate is selected. Using tools like Textio ensure that no candidates are detered away from applying.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 9,
      text: `Intrigued by the recommendation, you decide to give Textio a try, appreciating the opportunity to leverage technology to address the biases in your job posting.
      
      \nTextio is a great tool! It highlights word choices that show gender bias and suggesting alternatives.

      \nFinally, you think you have a inclusive and bias free job posting. 

      \nNow, you must publish the job posting.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 11,
      option1text: `You are looking forward to publishing the job posting.`,
      isTransition: true
    },
    {
      id: 11,
      text: `The next step is determining where you will post the job posting. You want to target a wide range of qualified applicants. 
      You decide that simply adding the posting to the Avengers4U hiring portal is not enough. You consider making a Google Ad to encourage people to apply.
      
      \nAs you are making your ad, your coworker Dan walks by. Dan is a senior engineer on your team. Dan says “Hope Google Ads isn’t the only place you’re promoting the job” and walks by.
      
      \nYou sit there confused. What did Dan mean? `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 13,
      option1text: `You go to Dan to ask him for clarification`,
      option2ID: 12,
      option2text: `You ignore Dan. What does Dan know?`
    },
    {
      id: 12,
      text: `You decide to ignore Dan. After all, you are the manager, not Dan. You trust your gut. 
      
      \nYou post the advertisement and wait for all the talented applicants to apply.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 14,
      option1text: `Wait for applicants to apply`,
      isTransition: true
    },
    {
      id: 14,
      text: `One week has passed. You decide to look through at the job portal to see who has applied. 
      
      \nFlipping through the applications, the first one is Tony Stark. He looks like a promising candidate, he made his own operating system. The second applicant is Steve Rogers, a civil engineer. The third applicant is Thor Odinson, a cloud engineer. As you flip through all 20 applications, you notice only 1 female applicant, Natasha Romanova. That’s weird, why was there a lack of diversity in this ad? 

      \nFeeling unmotivated, you decide to finally ask Dan what he meant about his Google Ad comment`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 13,
      option1text: `Ask Dan to explain what he meant`,
      isTransition: true
    },
    {
      id: 13,
      text: `You pick up the courage to ask Dan what he meant. 
      
      \nDan is happy to see you. He says “There was a study done on Google’s Ad system and it found that it was more likely to display ads for high paying positions to male users than female users”. You are shocked. How can this be true? 
      
      \nDan continues, “The model was trained on historical data. It learned from patterns that men are generally represented in high paying jobs compared to women”.

      \nBased on this conversation, what is your next step?`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 15,
      option1text: `Ignore what Dan said and continue to hire from these candidates.`,
      option2ID: 16,
      option2text: `You listen to Dan`
    },
    {
      id: 15,
      text: `Dan lets HR know about your conversation. They send you a warning that this would have been avoidable if you had excepted their help in the beginning. 
      
      \nThey take over hiring now. `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 16,
      text: `You realize that only posting on advertisement on Google was not the right way to go. 
      
      \nYou decide to make job postings on LinkedIn and Indeed to attract more applicants. Job postings should ensure an equal treatment of all applicants. 
      
      \nYou conclude that relying only on Google Ads will narrow your search for the most qualified applicant. 
      `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 18,
      option1text: `Now, you wait for job applications`,
      isTransition: true
    },
    {
      id: 17,
      text: `Now, one week later, you have more diverse applicants. More individuals identifying as female and non-binary have applied.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 18,
      option1text: `You look forward to screening the applicants`,
      isTransition: true
    },
    {
      id: 18,
      text: `You are now on the screening stage. 
      
      \nYou have received many diverse applications in regards to gender, age, ethnicity, etc for the role. 
      
      \nThe company uses an applicant tracking system (ATS) (ex. Workday, Taleo) that helps filter out candidates.
      
      \nThe ATS automatically filters out resumes based on keywords, education, and experience.
     
      \nHowever, the ATS has inherent biases, leading to the exclusion of potentially qualified candidates.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 19,
      option1text: `Choose to review only the top-ranked resumes suggested by the ATS`,
      option2ID: 20,
      option2text: `Manually review all reseumes`
    },
    {
      id: 19,
      text: `You choose to review only the top-ranked resumes suggested by the ATS.
      This perpetuates bias because the ATS might favour certain backgrounds or keywords. 
      
      \nThe top-ranked resumes selected by the ATS are not diverse. 
      All the selected candidates are Caucasian males at top engineering school. 
      
      \nYou decide to continue using ATS, but look at the non top-ranked resumes as well and review the flags.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 21,
      option1text: `Continue using the ATS, but look at the non top ranked resumes as well and review the flags.`,
      isTransition: true
    },
    {
      id: 20,
      text: `You manually review all resumes, even those flagged by the ATS. 
      This requires more effort but ensures a fairer evaluation. 

      \nYou find there is a lot of hidden bias in the ATS algorithm as the ATS favours certain backgrounds and keywords. 
      
      \nDue to the large number of applicants, this takes too long so you decide to use the filtered ATS results, 
      but also screen manually the flags to be more thorough and reduce bias.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 21,
      option1text: `Use the filtered ATS results, but also screen manually the flags to be more thorough and reduce bias.`,
      isTransition: true
    },
    {
      id: 21,
      text: `You encounter a resume from an older candidate. Anne Brown is an experienced software developer 
      who has 35+ years of experience in the industry. The ATS flags them due to age-related keywords. 
      
      \nWill you ignore the flag and proceed with this applicant?`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 22,
      option1text: `Dismiss older candidates`,
      option2ID: 23,
      option2text: `Move forward to the interview stage with Anne`
    },
    {
      id: 22,
      text: `The team misses out on experienced talent, reinforcing age bias.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 24,
      option1text: `Screen more candidates`,
      isTransition: true
    },
    {
      id: 23,
      text: `You discovers that some older candidates are highly skilled and now challenge age stereotypes.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 24,
      option1text: `Screen more candidates`,
      isTransition: true
    },
    {
      id: 24,
      text: `You encounter a resume that is flagged due to the candidate having a diverse names. 
      Some names are less common or non-Western. The ATS may subtly favour familiar names. 
      
      \nThe candidate in question, Rahul Kohli, matches the job requirements and seems like a good fit for the job.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 25,
      option1text: `Go along with the ATS and prioritize resumes with familar names.`,
      option2ID: 26,
      option2text: `Move forward to the interview stage with Rahul`
    },
    {
      id: 25,
      text: `The team misses out on diverse perspectives and perpetuates name-based bias.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 27,
      option1text: `Screen more candidates`,
      isTransition: true
    },
    {
      id: 26,
      text: `You learn about the impact of name bias. To combat this type of discrimation, 
      you hide the names of the resumes when reviewing them.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 27,
      option1text: `Screen more candidates`,
      isTransition: true
    },
    {
      id: 27,
      text: `You encounter Steve Lee’s resume, a candidates with a disability. 
      
      \nThe ATS flags it as it struggles to interpret non-standard experiences.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 28,
      option1text: `Dimiss Steve's resume`,
      option2ID: 29,
      option2text: `Investigate further and considers alternative qualifications that Steve has`
    },
    {
      id: 28,
      text: `The team unintentionally discriminates against disabled applicants.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 30,
      option1text: `Screen more candidates`,
      isTransition: true
    },
    {
      id: 29,
      text: `You discover that unconventional experiences can be valuable and adjust the evaluation process to be more inclusive.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 30,
      option1text: `Screen more candidates`,
      isTransition: true
    },
    {
      id: 30,
      text: `You encounter Lily Chen's resume, a candidate with a maternity age gap. The ATS flaggs her resume as a liability. 
      
     \nYou must choose between 2 candidates: 
      Lily, a mom who is qualified with 3 years of experience but has a maternity leave gap 
      vs. 
      Rebbeca Snow, a less qualified candidate with 1.5 years of experience with no maternity gap.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 31,
      option1text: `Dimiss Lily's resume and choose Rebecca to move forward to the interview process`,
      option2ID: 32,
      option2text: `Choose Lily to move forward to the interview process`
    },
    {
      id: 31,
      text: `The team unintentionally discriminates against moms.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 33,
      option1text: `You finished screening candidates. Now you will move onto the interviewing stage.`,
      isTransition: true
    },
    {
      id: 32,
      text: `You discover that having maternity leave gaps in someone's experience is 
      not a liability and brings valuable experiences and perspectives.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 33,
      option1text: `You finished screening candidates. Now you will move onto the interviewing stage.`,
      isTransition: true
    },
    {
      id: 33,
      text: `You’re now on the interviewing stage.

      \nYou have quite a few candidates to interview and responsibilities for projects on your team that you also need to take care of simultaneously. 
      
      \nYou know that if you continue to thoroughly interview all these candidates yourself, you won’t be abe to meet your project deadlines and select the hire in 2 weeks.
      
      \nYou start to research possible technologies to use in the interview process. The company has used HireVue in the past and you think it would be helpful in expediting the process.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 34,
      option1text: `The algorithmic technology seems like the perfect solution for your problem.`,
      option2ID: 35,
      option2text: `You decide to do some more research into the company.`,
      option3ID: 36,
      option3text: `You decide to avoid using the technology.`,
      isThirdOption: true
    },
    {
      id: 34,
      text: `You decide to go ahead with the technology and think it’ll be great in giving a baseline to compare all interviewees and expedite the decision-making process immensely.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 37,
      option1text: `Continue.`,
      isTransition: true
    },
    {
      id: 35,
      text: `The company’s system uses the candidates’ camera to analyze their facial movements, word choice, and speaking voice before ranking them against other applicants based on an automatically generated 
      “employability” score.” The system then creates a computer-generated estimate of the candidates’ skills and behaviors, including their “willingness to learn” and “personal stability.”

     \nYou also check in with HR about past candidate experiences. 
      Most candidates have not submitted feedback about the tool but there are a few bad reviews that indicate candidate displeasure. 
      
      \nA recent news article by the Washington Post also highlights that the Electronic Private Information Centre, or EPIC, said that HireVue’s AI-driven assessments produce results that are 
      “biased, unprovable and not replicable” and could unfairly score someone based on prejudices related to their gender, race, sexual orientation or neurological differences.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 37,
      option1text: `You decide to go ahead with the technology but make it a small part of the decision-making process. 

      This way, you can conduct interviews faster and the technology will help give a baseline to compare all the interviewees.`,
      option2ID: 40,
      option2text: `After reading through the article, you decide that it would be the most equitable approach to go through with interviews manually.`,
    },
    {
      id: 36,
      text: `You recall doing some AI supported calls as an interviewee in the past and remember how it impacted your confidence. 
      
      \nYou felt as if there was minimal opportunity to showcase your skill set during the interview and provided shorter interview answers since there was a lack of genuine interaction. 
      You recall your African-American friend also telling you that they had a frustrating and discriminatory experience where the algorithm did not even recognize them. 
      You don’t want to put anyone else through that process. 

      \nTo combat the looming deadlines, you pull in other members of your team to help with the interviewing process and host a detailed meeting before interviews start to answer any questions 
      and align the team on the best practices to avoid bias to even the playing field as much as possible for all candidates.
      
      \nYou tell the team to go in blind in the interviews to avoid unconscious biases and create a set of defined questions to allow interviewers to focus on the factors that have a direct 
      impact on the candidate’s work. You also use an interview scorecard that grades candidates’ responses on a per-determined scale and have 2 interviewers attend each interview. 
      
      \nInterviews went a bit over the deadline but they were a success and the team is excited about a few diverse candidates who made it past interviews`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 41,
      option1text: `Move to post selection.`,
      isTransition: true,
    },
    {
      id: 37,
      text: `After interviews are completed before the deadline, you notice something odd about the employability scores of some of the candidates. 

      \nNicole, who was a stellar candidate and great communicator during the technical interview, was rated much lower than Steve, who you found to be a bit off-putting. 
      You dive deeper into the information that the algorithm gathered for both candidates and begin to worry.
      
      \nNicole was well-dressed for the interview and answered confidently in the allotted time. The algorithm had caught the positive keywords she used as well. 
      But the algorithm has indicated that she looked angry and was not well-suited to the job due to a bad temper. Comparatively, Steve’s score is pretty accurate.  
      
      \nYou do some more digging and find that facial-analysis software shows error rate of 0.8 percent for light-skinned men compared to 34.7 percent for dark-skinned women. 
      Machine Learning Automated Decision Making, or ML-ADM, often exhibits gender and skin-type bias that is unfair to women and incorrectly assessed Nicole’s facial expressions and tone.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 38,
      option1text: `You decide to trust the algorithm and reject candidates like Nicole due to extremely low score by HireVue.`,
      option2ID: 39,
      option2text: `You decide to go with your gut and move candidates like Nicole forward, despite the extremely low score by HireVue.`,
    },
    {
      id: 38,
      text: `Due to your decision, the final batch of candidates after interviews is made up of only white males. 

      \nNicole asks how she could improve after receiving a rejection email and you aren’t able to explain why the AI hiring system believed she was unfit for the role.
      
      \nThe final batch of candidates after interviews is not as  diverse as it would have been had you not put your full faith in the algorithm. 
      
      \nA recent news article by the Washington Post also highlights that the Electronic Private Information Centre, or EPIC, said that HireVue’s AI-driven assessments produce 
      results that unfairly score people based on prejudices related to their gender, race, sexual orientation or neurological differences. Its disappointing to see this 
      reflected so personally in your own experience.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 39,
      text: `Due to your decision, the final batch of candidates after interviews is more diverse than it would have been had you listened to the algorithm`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 41,
      option1text: `Move to post selection.`,
      isTransition: true
    },
    {
      id: 40,
      text: `To combat the looming deadlines, you pull in other members of your team to help with the interviewing process and host a detailed meeting before interviews start 
      to answer any questions and align the team on the best practices to avoid bias to even the playing field as much as possible for all candidates.

      \nYou tell the team to go in blind in the interviews to avoid unconscious biases and create a set of defined questions to allow interviewers to focus on the factors that have a direct impact on the 
      candidate's work. You also use an interview scorecard that grades candidates’ responses on a per-determined scale and have 2 interviewers attend each interview. 
      
      \nInterviews went a bit over the deadline but they were a success and the team is excited about a few diverse candidates who made it past interviews.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 41,
      option1text: `Move to post selection.`,
      isTransition: true
    },
    {
      id: 41,
      text: `You have successfully selected a few candidates to hire! As the HR manager, you are now responsible for choosing starting salaries for the new hires based on roles, experience, and market standards. 

      \nThe company has recently started using a SalaryAI tool to assist with setting compensation, and doing market analysis. The AI uses data analytics to set competitive salary offers for new hires. 
      The AI claims to optimize compensation packages by analyzing a vast array of market data, internal salary trends, and applicant's previous earnings.

      \nUsing such an AI tool makes the process relatively easier and saves so much time. However, the AI system might have some unintentional biases. 
      
      \nYour company has hired for two key positions: Software Engineer and a Marketing Analyst. Both positions have top-tier candidates, Maya Khan and Nate Perez for engineering both of whom are final-round candidates from minority backgrounds.
      SalaryAI returns with the salary suggestions: $80,000 for Sophia and $70,000 for Nate. However, you know the market rate for these positions at companies similar to yours is $100,000 for software engineering and $85,000 for marketing analysts.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 42,
      option1text: `You choose to compare both Nate and Maya's qualifications and previous roles as well as current employees salary compensation in the company and the market.`,
      option2ID: 43,
      option2text: `You decide to go ahead with the AI's recommended salaries and pay packages, trusting the AI's analysis is comprehensive and objective.`,
    },
    {
      id: 42,
      text: `By manually checking, you understand the importance of human oversight in AI decisions, promoting equity and preventing bias. You learn that while AI tools can be helpful, they must be regularly audited and adjusted to serve the company's values of fairness and equality. `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 48,
      option1text: `The numbers are in, and the stage is set. PromoAI 2.0 has been adjusting its algorithm and meticulously evaluated your team's performance, and destinies are about to change. Some will rise, while others may stay on their current path. Time to find out who's the office superstar and who's been slacking off in the meme-sharing department!`,
      isTransition: true
    },
    {
      id: 43,
      text: `This, however, might perpetuate pay disparity based on BIPOC and gender.
      
      \nYou make the offers as suggested. However, Nate and Maya might soon discover they are being paid less than market rates and less than their peers for similar roles.
      
      \nRISK: They feel undervalued and start looking for new opportunities. Your decision can lead to turnover issues.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 44,
      option1text: `Puzzled by the analysis from the AI system and being mindful of the risk, you choose to dig deeper. `,
      option2ID: 45,
      option2text: `You choose to go ahead with the AI suggested pays confidently as they align with organization’s values of data-driven decisions and AI’s “unbiasness” as many cite in news.  `,
    },
    {
      id: 45,
      text: `GAME OVER! Due to AI’s inherent biases, company now faces legal action. The decision leads to internal unrest and public scrutiny as employees begin to openly discuss the clear disparity in compensation adjustments and a PR nightmare that damages the company's reputation.`,
      image: "",
      altText: `add alt text`,
      isGameOver: true

    },
    {
      id: 44,
      text: `You can see that based on historical data and current employees in that role, suggested a lower salary for Nate for this analyst role and Maya for the engineering role. 
      SalaryAI recommends salaries for new hires that are surprisingly lower for women and minority groups, despite their similar qualifications to other candidates. 
      It heavily factors in previous candidates salaries and although Maya and Nate are excellent candidates, salaries are way below market rate due to the systematic underpayment of minorities in tech industry. 

      \nDespite this bias, you realize manually searching for market rate is time-consuming.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 46,
      option1text: `So, you decide to go ahead with the suggested salaries by AI and adjust it manually to ensure pay equity. You adjusted Maya's offer to ensure parity, mindful of the company's commitment to diversity and equality.
      
      You immediately rectify the situation by increasing their pays and add more benefits to their roles and tell the HR team to manually compare the salary set by AI to avoid such issues in the future. `,
      option2ID: 47,
      option2text: `You choose to go ahead with Salary AI’s suggestions and collaborate with the team to send the new hires their respective pay and benefits package. `,
    },
    {
      id: 46,
      text: `By manually checking,  you understand the importance of human oversight in AI decisions, promoting equity and preventing bias. You learn that while AI tools can be helpful, they must be regularly audited and adjusted to serve the company's values of fairness and equality.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 48,
      option1text: `The numbers are in, and the stage is set. PromoAI 2.0 has been adjusting its algorithm and meticulously evaluated your team's performance, and destinies are about to change. Some will rise, while others may stay on their current path. Time to find out who's the office superstar and who's been slacking off in the meme-sharing department!`,
      isTransition: true
    },
    {
      id: 47,
      text: `GAME OVER! Due to AI’s inherent biases, company now faces legal action. The decision leads to internal unrest and public scrutiny as employees begin to openly discuss the clear disparity in compensation adjustments and a PR nightmare that damages the company's reputation.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 48,
      text: ` 2 years later......
      
      \nIt has now been 2 years and it's time for performance reviews and potential promotions, and you're now working with PromoAI 2.0 tool which is trained on evaluating performance, and managing promotions. 
      It is designed to assist in promotion decisions, performance evaluations, and salary adjustments. The system analyzes employee performance data, feedback, and historical trends to make recommendations.
      
      \nDecision: You are tasked with reviewing the AI-recommended list of employees for promotions and salary increases. The system has also provided a percentile ranking for each employee based on their performance metrics.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 49,
      option1text: `You choose to do a combined approach of manual checking and using AI.`,
      option2ID: 50,
      option2text: `You trust and go ahead with the AI created list as the process is very time-consuming.`,
    },
    {
      id: 49,
      text: `You remember there’s been a situation where a MAC employee has been fired due to facial analysis conducting performance reviews. 
      
      \nAs you review the list, you notice that the top 10% recommended for significant promotions and raises are predominantly male, despite the workforce being more diverse. 
      Upon a closer examination, you find that most of the female employees and those from minority groups are clustered around the middle or bottom of the percentile rankings.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 51,
      option1text: `You adjust the promotions based on your employees' merit.`,
      option2ID: 52,
      option2text: `You send the new findings to the developer team and re-train the model to provide accurate results.`,
      isTransition: true
    },
    {
      id: 51,
      text: `Success! Congratulations! You have successfully navigated through the entire process of hiring a candidate and completed the simulation. Most of your decisions led to an improved workplace culture, higher employee morale, and bolstered the company’s reputation for fairness. Well done!"`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 52,
      text: `Failure :(. Unfortunately, the decision to follow AI recommendations without scrutiny resulted in overlooking qualified candidates, fostering workplace bias, and leading to a loss of talent. 
      This serves as a hard lesson on the importance of human oversight in AI processes.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 50,
      text: `Unfortunately, AI’s recommended list had inherent age and gender bias. 
      
      \nAI tool disproportionately recommended higher bonuses for the young tech team, most of whom are male. Seasoned employees in support roles, including many from minority groups, have been recommended much lower bonuses or none at all. 
      
      \nCompany culture suffers as seasoned and minority employees feel undervalued. 

      \nUnfortunately, the decision to follow AI recommendations without scrutiny resulted in overlooking qualified candidates, fostering workplace bias, and leading to a loss of talent. 
      This serves as a hard lesson on the importance of human oversight in AI processes.
      You have failed the simulation! Restart the simulation. 
      `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    }

  ]
}

module.exports = gamePromptPage