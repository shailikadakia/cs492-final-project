const gamePromptPage = {
  data: [
      {
        id: 0,
        text: `Select your role. Choose betweeen 2 men who are 40, and 50 respectively and both white. 
        Did you know that 7.4% of all engineering managers are women, while 92.6% are men and the most common ethnicity of engineering managers is white at 71.0%?`,
        image: "https://i.ibb.co/zJwLFRC/Select-Your-Role2-White-Men.png",
        altText: `Two white men sitting and discussing at a table`,
        option1ID: 1,
        option1text: `40 year old manager`,
        option2ID: 2,
        option2text: `50 year old manager`,
      },
      {
        id: 1,
        text:  `Your name is John, a 40 year old manager recently promoted at Avengers4U. 
  
        Your first task is to hire a new software developer to join your team. 
        
        This is your first time hiring someone. You want to make a good impression on your team. The Talent Acquisition Specialist at Avengers4U offers you some resources to assist with hiring.`,
        image: "https://i.ibb.co/qmwPfG5/Selected40-Year-Old.png",
        altText: `40 year old white man`,
        option1ID: 3,
        option1text: `You respectfully decline`,
        option2ID: 4,
        option2text: `You gladly take them up on their offer`
      },
      {
        id: 2,
        text: `Your name is William, a 50 year old manager recently promoted at Avengers4U.
  
        Your first task is to hire a new software developer to join your team. This is your first time hiring someone. You want to make a good impression on your team. 
        
        The Talent Acquisition Specialist at Avengers4U offers you some resources to assist with hiring.`,
        image: "https://i.ibb.co/d5HFnN1/Selected50-Year-Old.png",
        altText: `50 year old white man`,
        option1ID: 3,
        option1text: `You respectfully decline`,
        option2ID: 4,
        option2text: `You gladly take them up on their offer `
      },
      {
        id: 3,
        text: `You decide that you are more than capable of making the hiring decision yourself. After all, you’ve been an applicant before. How hard can this be?
        
        You start by drafting the job posting. You highlight the company’s commitment to diversity, aiming to attract a wide range of talented individuals. 
  
        You begin to picture the ideal candidate: A software engineer with 5 years of work experience that is not afraid to push the envelope. An ambitious and driven individual, active in the software development life cycle.`,
        image: "https://i.ibb.co/hmYW8dV/Drafting-Job-Description.png",
        altText:`A white man writing a job description`,
        option1ID: 5,
        option1text: `You add these qualifications in the job description`,
        isTransition: true
      },
      {
        id: 4,
        text: `You decide to ask the Talent Acquisition Specialist for advice. Maura is glad that you reached out!
  
        Maura explains that to hire a new team member, drafting a job posting is the first step. However, this can cause problems if you are not careful. 
  
        Maura tells you that the job posting reflects implicit biases. Surprised, she continues that the word embeddings used by the Google News dataset answered the analogy that a man is a computer programmer and a woman is a homemaker (Bolukbasi et al., 2016). 
        She explains that word embeddings are a way of representing words for text analysis in the form of real-valued vectors. These vectors preserve semantic and syntactic information, but they can also reflect social biases. 
        The model trained on the Google News dataset, for example, associated certain occupations more closely with one gender than the other, reinforcing stereotypes. 
  
        While this happened many years ago, it serves as an important reminder to write job postings with language that doesn’t promote implicit biases. Algorithms, particularly those used in natural language processing (NLP) and machine learning, can amplify biases present in the data they are trained on. 
        If job postings use biased language, these biases can be learned and perpetuated by the algorithms, leading to unfair outcomes in candidate selection.
  
        In a study on German job postings, it found that gender-stereotypical words were frequently used in job postings (Böhm et al., 2020). In fact, text analysis algorithms can detect occupational stereotypes in text. These gendered words stem from the stereotype that men typically identify with agentic goals while women typically associate with communal goals (Tang et al., 2017).
  
        Agentic traits are associated with behaviors that involve assertiveness, independence, and achievement. These traits are often stereotypically attributed to men, reflecting societal expectations around leadership and competitiveness. In job postings, agentic language might include words like "ambitious," "driven," and "active”.
  
        Communal traits are typically associated with behaviors that involve nurturing, caring, and connecting with others. These traits are often stereotypically attributed to women, reflecting societal expectations around caregiving and emotional labor. In job postings, communal language might include words like "collaborate," "support," and "connect". 
  
        Maura adds that the job portal at Avengers4U extrapolates the information from the job posting to show the job to the ideal candidate. It has been trained on past data to determine the ideal candidate, which in the past had been men. In this case, male applicants were more likely to see the job posting due to the use of agentic words. 
        As a result, as a company, we strive to write gender-neutral job postings so that the portal does not have an implicit bias toward some candidates.
  
        You thank Maura for explaining how to fairly write a job posting without using implicit biases.
        `,
        image: "https://i.ibb.co/9r91CXw/Business-Man-Thanking-Business-Women.png",
        altText: `A business man thanking a business woman`,
        option1ID: 8,
        option1text: `You post the job posting on the job portal without approval`,
        option2ID: 7,
        option2text: `You ask HR for approval before proceeding`
      },
      {
        id: 5,
        text: `You want to get a new team member hired as soon as possible so you can move on to other tasks. 
        You decide to write the job description as you decided, without getting approval from Talent Acquisition.`,
        image: "https://i.ibb.co/3vNkGcc/Man-With-Job-Description.png",
        altText: `Man with a job description sheet of paper`,
        option1ID: 6,
        option1text: `You are done writing the job posting.`,
        isTransition: true
      },
      {
        id: 6,
        text: ` Maura tells you that the job posting reflects implicit biases. Surprised, she continues that the word embeddings used by the Google News dataset answered the analogy that a man is a computer programmer and a woman is a homemaker (Bolukbasi et al., 2016). 
        She explains that word embeddings are a way of representing words for text analysis in the form of real-valued vectors. These vectors preserve semantic and syntactic information, but they can also reflect social biases. 
        The model trained on the Google News dataset, for example, associated certain occupations more closely with one gender than the other, reinforcing stereotypes. 
  
        While this happened many years ago, it serves as an important reminder to write job postings with language that doesn’t promote implicit biases. Algorithms, particularly those used in natural language processing (NLP) and machine learning, can amplify biases present in the data they are trained on. 
        If job postings use biased language, these biases can be learned and perpetuated by the algorithms, leading to unfair outcomes in candidate selection.
  
        In a study on German job postings, it found that gender-stereotypical words were frequently used in job postings (Böhm et al., 2020). In fact, text analysis algorithms can detect occupational stereotypes in text. These gendered words stem from the stereotype that men typically identify with agentic goals while women typically associate with communal goals (Tang et al., 2017).
  
        Agentic traits are associated with behaviors that involve assertiveness, independence, and achievement. These traits are often stereotypically attributed to men, reflecting societal expectations around leadership and competitiveness. In job postings, agentic language might include words like "ambitious," "driven," and "active”.
  
        Communal traits are typically associated with behaviors that involve nurturing, caring, and connecting with others. These traits are often stereotypically attributed to women, reflecting societal expectations around caregiving and emotional labor. In job postings, communal language might include words like "collaborate," "support," and "connect". 
  
        Maura adds that the job portal at Avengers4U extrapolates the information from the job posting to show the job to the ideal candidate. It has been trained on past data to determine the ideal candidate, which in the past had been men. In this case, male applicants were more likely to see the job posting due to the use of agentic words. 
        As a result, as a company, we strive to write gender-neutral job postings so that the portal does not have an implicit bias toward some candidates.
  
        You are surprised to hear this and Maura is disappointed that you did not take up on her offer for help.
        
        Consequently, Maura decides to take over the hiring process. 
  
        You are disappointed in yourself.`,
        altText: `Game Over`,
        isGameOver: true
      },
      
      {
        id: 7,
        text: `Maura is glad you asked for approval. She recommends a tool named Textio, an augmented writing platform that employs AI to mitigate biased language in job descriptions. 
        
         She explains that Textio uses natural language processing (NLP) to analyze job postings and suggest alternative language that is more inclusive and appealing to diverse audiences. 
        
        Intrigued by the recommendation, you decide to give Textio a try, appreciating the opportunity to leverage technology to address the biases in your job posting.`,
        image: "https://i.ibb.co/44HR29G/Textio.jpg",
        altText: `Textio logo`,
        option1ID: 9,
        option1text: `You try using Textio`,
        option2ID: 8,
        option2text: "You try to take a shortcut and avoid using Textio",
      },
      {
        id: 8,
        text: `Maura is disappointed that you did not ask for approval. She explains that Textio is a tool they run job postings by to detect biased language and suggest alternative language. This way, the job posting can be appealing to a diverse audience. 
  
        You are disappointed that you did not ask for approval. It is important that the most qualified candidate is selected. Using tools like Textio ensures that no candidates are deterred away from applying.`,
        altText: `Game Over`,
        isGameOver: true
      },
      {
        id: 9,
        text: `Intrigued by the recommendation, you decide to give Textio a try, appreciating the opportunity to leverage technology to address the biases in your job posting.
        
        Textio is a great tool! It highlights word choices that show gender bias and suggests alternatives.
  
        Finally, you think you have an inclusive and bias-free job posting. 
  
        Now, you must publish the job posting.`,
        image: "https://i.ibb.co/Njfd0yX/About-To-Publish-Job-Posting.png",
        altText: `Man about to publish a job posting`,
        option1ID: 11,
        option1text: `You are looking forward to publishing the job posting.`,
        isTransition: true
      },
      {
        id: 11,
        text: `The next step is determining where you will post the job posting. You want to target a wide range of qualified applicants. 
        You decide that simply adding the posting to the Avengers4U hiring portal is not enough. You consider making a Google Ad to encourage people to apply.
        
        As you are creating your ad, your coworker Dan walks by. Dan is a senior engineer on your team. Dan says “Hope Google Ads isn’t the only place you’re promoting the job” and walks by.
        
        You sit there confused. What did Dan mean? `,
        image: "https://i.ibb.co/vkgQQTj/Confused-Man.png",
        altText: `Man holding his hand to his head`,
        option1ID: 13,
        option1text: `You go to Dan to ask him for clarification`,
        option2ID: 12,
        option2text: `You ignore Dan. What does Dan know?`
      },
      {
        id: 12,
        text: `You decide to ignore Dan. After all, you are the manager, not Dan. You trust your gut. 
        
        You post the advertisement and wait for all the talented applicants to apply.`,
        image: "https://i.ibb.co/7SmY5sZ/Confident-Man.png",
        altText: `A confident man`,
        option1ID: 14,
        option1text: `Wait for applicants to apply`,
        isTransition: true
      },
      {
        id: 14,
        text: `One week has passed. You decide to look through the job portal to see who has applied. 
        
        Flipping through the applications, the first one is Tony Stark. He looks like a promising candidate. He built his own operating system. The second applicant is Steve Rogers, a civil engineer. The third applicant is Thor Odinson, a cloud engineer. As you flip through all 20 applications, you notice only 1 female applicant, Natasha Romanova. That’s weird, was there a lack of diversity in this ad? 
  
        Feeling unmotivated, you decide to finally ask Dan what he meant about his Google Ad comment`,
        image: "https://i.ibb.co/ykc9XtM/Unmotivated-Man.pngg",
        altText: `A man thinking and sitting at his desk`,
        option1ID: 13,
        option1text: `Ask Dan to explain what he meant`,
        isTransition: true
      },
      {
        id: 13,
        text: `You pick up the courage to ask Dan what he meant. 
        
        Dan is happy to see you. He says “There was a study done on Google’s Ad system and it found that it was more likely to display ads for high-paying positions to male users than female users” (Carpenter, 2015). You are shocked. How can this be true? 
        
        Dan continues, “The model was trained on historical data. It learned from patterns that men are generally represented in high-paying jobs compared to women”.
  
        Based on this conversation, what is your next step?`,
        image: "https://i.ibb.co/BPkvcQ0/Convo-About-Google-Ad.png",
        altText: `Two men discussing the Google Ads system`,
        option1ID: 15,
        option1text: `Ignore what Dan said and continue to hire from these candidates.`,
        option2ID: 16,
        option2text: `You listen to Dan`
      },
      {
        id: 15,
        text: `Dan lets HR know about your conversation. Despite the study being a few years old, Avengers4U is very serious about advertisements for job postings. HR believes job posting advertisements should always be made on more than 1 platform, to ensure all potential applicants have the same likelihood for success. 
        
        They send you a warning that this would have been avoidable if you had accepted their help in the beginning. They take over hiring now. `,
        altText: `Game Over`,
        isGameOver: true
      },
      {
        id: 16,
        text: `You realize that only posting on advertisement on Google was not the right way to go. 
        
        You decide to make job postings on LinkedIn and Indeed to attract more applicants. Job postings should ensure an equal treatment of all applicants. 
        
        You conclude that relying only on Google Ads will narrow your search for the most qualified applicant. 
        `,
        image: "https://i.ibb.co/6JQxDPW/Linked-In-Posting.png",
        altText: `Two people around a Linkedin posting`,
        option1ID: 18,
        option1text: `Now, you wait for job applications`,
        isTransition: true
      },
      {
        id: 17,
        text: `Now, one week later, you have more diverse applicants. More individuals identifying as female and non-binary have applied.`,
        image: "https://i.ibb.co/8D1QjwK/Women-Applying-To-Job.png",
        altText: `Individuals identifying as a woman or non-binary apply to a job`,
        option1ID: 18,
        option1text: `You look forward to screening the applicants`,
        isTransition: true
      },
      {
        id: 18,
        text: `You are now on the screening stage. 
        
        You have received many diverse applications in regard to gender, age, ethnicity, etc for the role. The company uses an applicant tracking system (ATS) (ex. Workday, Taleo) that helps filter out candidates. The ATS automatically filters out resumes based on keywords, education, and experience.
        However, the ATS has inherent biases, leading to the exclusion of potentially qualified candidates.`,
        image: "https://i.ibb.co/sR8Sndv/ATSscreening.png",
        altText: `ATS screening on a tablet`,
        option1ID: 19,
        option1text: `Choose to review only the top-ranked resumes suggested by the ATS`,
        option2ID: 20,
        option2text: `Manually review all resumes`
      },
      {
        id: 19,
        text: `You choose to review only the top-ranked resumes suggested by the ATS. This perpetuates bias because the ATS might favour certain backgrounds or keywords. 
        
        The top-ranked resumes selected by the ATS are not diverse. All the selected candidates are Caucasian males at top engineering schools. 
        
        You decide to continue using ATS, but look at the non-top-ranked resumes as well and review the flags.`,
        image: "https://i.ibb.co/FwBFRKn/ATSApproved-Resumes.png",
        altText: `Compare two resumes`,
        option1ID: 21,
        option1text: `Continue using the ATS, but look at the non-top ranked resumes as well and review the flags.`,
        isTransition: true
      },
      {
        id: 20,
        text: `You manually review all resumes, even those flagged by the ATS. This requires more effort but ensures a fairer evaluation. 
  
        You find there is a lot of hidden bias in the ATS algorithm as the ATS favours certain backgrounds and keywords. 
        
        Due to the large number of applicants, this takes too long so you decide to use the filtered ATS results, but also screen manually the flags to be more thorough and reduce bias.`,
        image: "https://i.ibb.co/g6X7hkh/Manually-Approved-Resumes.png",
        altText: `Compare two resumes`,
        option1ID: 21,
        option1text: `Use the filtered ATS results, but also screen manually the flags to be more thorough and reduce bias.`,
        isTransition: true
      },
      {
        id: 21,
        text: `You encounter a resume from an older candidate. Anne Brown is an experienced software developer who has 35+ years of experience in the industry. The ATS flags them due to age-related keywords. 
        
        Will you ignore the flag and proceed with this applicant?`,
        image: "https://i.ibb.co/nR0fbCr/Older-Applicant-Resume.png",
        altText: `Resume of an older applicant`,
        option1ID: 22,
        option1text: `Dismiss older candidates`,
        option2ID: 23,
        option2text: `Move forward to the interview stage with Anne`
      },
      {
        id: 22,
        text: `Maura, the Talent Acquisition Specialist informs you that this was an example of age discrimination.
        
        She adds that 99% of Fortune 500 companies filter candidates using ATS (Davis, 2023). However, the U.S. Equal Employment Opportunity Commission (EEOC) settled its first lawsuit related to age discrimination (Schmidt & Timko, 2023). The EEOC alleged that the ATS used to screen applicants was discriminatory in rejecting older applicants. 
  
        Maura explains that this is why screening cannot solely be based on the use of ATS. It is important to go through the resumes flagged by ATS for age-related keywords to ensure no discrimination occurs.
  
        As a result, the team misses out on experienced talent. You are disappointed in yourself.`,
        image: "https://i.ibb.co/FxHPpy1/SadTeam.png",
        altText: `A sad team of people`,
        option1ID: 24,
        option1text: `Screen more candidates`,
        isTransition: true,
        isGameOver: true
      },
      {
        id: 23,
        text: `You discover that some older candidates are highly skilled and now challenge age stereotypes. While some ATS can flag applicants due to age bias, it is important to hire with a fair and inclusive mindset.
        
        In fact, the U.S. Equal Employment Opportunity Commission (EEOC) settled its first lawsuit related to age discrimination (Schmidt & Timko, 2023). The EEOC alleged that the ATS used to screen applicants was discriminatory in rejecting older applicants. `,
        image: "https://i.ibb.co/VSKBvPT/Challenging-Age-Stereotypes.png",
        altText: `A group of people celebrating while a woman gives a speech`,
        option1ID: 24,
        option1text: `Screen more candidates`,
        isTransition: true
      },
      {
        id: 24,
        text: `You encounter a resume that is flagged due to the candidate having a diverse name.  Some names are less common or non-Western. The ATS may subtly favour familiar names. 
  
        The candidate in question, Rahul Kohli, matches the job requirements and seems like a good fit for the job.`,
        image: "https://i.ibb.co/g3rxxNb/Diversity-Resume-Discrimination.png",
        altText: `A man's resume in the background with the man standing in front of it`,
        option1ID: 25,
        option1text: `Go along with the ATS and prioritize resumes with familiar names.`,
        option2ID: 26,
        option2text: `Move forward to the interview stage with Rahul`
      },
      {
        id: 25,
        text: `Maura, the Talent Acquisition Specialist informs you that this was an example of name discrimination.
        
        She adds that 95% of studies on recruitment where researchers create fictitious applicants identify high ethnic discrimination. On average, ethnic minority applicants receive half as many positive responses (Adamovic, 2021). In fact, white-sounding names receive 50% more callbacks for interviews (Bertrand and Mullainathan, 2003). 
  
        As a result, the team misses out on the right talent. You are disappointed in yourself.`,
        image: "https://i.ibb.co/FxHPpy1/SadTeam.png",
        altText: `A sad team of people`,
        option1ID: 27,
        option1text: `Screen more candidates`,
        isTransition: true,
        isGameOver: true
      },
      {
        id: 26,
        text: `You learn about the impact of name bias. You discover that 95% of studies on recruitment where researchers create fictitious applicants identify high ethnic discrimination. On average, ethnic minority applicants receive half as many positive responses (Adamovic, 2021). In fact, white-sounding names receive 50% more callbacks for interviews (Bertrand and Mullainathan, 2003). 
        
        To combat this type of discrimination, you hide the names of the resumes when reviewing them.`,
        image: "https://i.ibb.co/9spLbqG/Diverse-Team.png",
        altText: `A diverse team of people smiling and posing`,
        option1ID: 27,
        option1text: `Screen more candidates`,
        isTransition: true
      },
      {
        id: 27,
        text: `You encounter Steve Lee’s resume, a candidate with a disability. The ATS flags it during the online tests to assess job skills since it ranked poorly for the use of keystrokes.`,
        image: "https://i.ibb.co/r7V74K8/Disability-Resume.png",
        altText: `A man sitting in a wheelchair in front of his resume`,
        option1ID: 28,
        option1text: `Dimiss Steve's resume`,
        option2ID: 29,
        option2text: `Investigate further and consider alternative qualifications that Steve has`
      },
      {
        id: 28,
        text: `Maura, the Talent Acquisition Specialist informs you that this was an example of disability-based discrimination.
        
        She adds that the U.S. Federal Government ruled that if AI is used to unfairly screen candidates with disabilities, it could violate civil rights laws. Using ATS to assess applicants can screen out candidates with physical disabilities and severe arthritis (O'Brien, 2022). 
  
        As a result, the team misses out on the right talent and you almost cause a lawsuit. You are disappointed in yourself.`,
        image: "https://i.ibb.co/FxHPpy1/SadTeam.png",
        altText: `A sad team of people`,
        option1ID: 30,
        option1text: `Screen more candidates`,
        isTransition: true,
        isGameOver: true
      },
      {
        id: 29,
        text: `You discover that unconventional experiences can be valuable and adjust the evaluation process to be more inclusive.
        
        You discover that the U.S. Federal Government ruled that if AI is used to unfairly screen candidates with disabilities, it could violate civil rights laws. Using ATS to assess applicants can screen out candidates with physical disabilities and severe arthritis (O'Brien, 2022). 
  
        Therefore, it is not only ethically right to be inclusive during screening but also legal.
        `,
        image: "https://i.ibb.co/pQjMDmM/Disability-Inclusive-Team.png",
        altText: `A team of people smiling`,
        option1ID: 30,
        option1text: `Screen more candidates`,
        isTransition: true
      },
      {
        id: 30,
        text: `You encounter Lily Chen's resume, a candidate with a maternity age gap. The ATS flags her resume as a liability. You must choose between 2 candidates: Lily, a mom who is qualified with 3 years of experience but has a maternity leave gap vs. Rebbeca Snow, a less qualified candidate with 1.5 years of experience with no maternity gap.`,
        image: "https://i.ibb.co/D74JyDc/Mom-Applicant.png",
        altText: `A woman holding her children on the left and working on the right`,
        option1ID: 31,
        option1text: `Dimiss Lily's resume and choose Rebecca to move forward to the interview process`,
        option2ID: 32,
        option2text: `Choose Lily to move forward to the interview process`
      },
      {
        id: 31,
        text: `Maura, the Talent Acquisition Specialist informs you that this was an example of discrimination against moms.
  
        She adds that in some ATS,  applicants who had maternity leave gaps in their resumes were being flagged as a liability and screened out (Liberatore, 2023). 
  
        As a result, the team misses out on the right talent. You are disappointed in yourself.`,
        image: "https://i.ibb.co/FxHPpy1/SadTeam.png",
        altText: `A sad team of people`,
        option1ID: 33,
        option1text: `You finished screening candidates. Now you will move onto the interviewing stage.`,
        isTransition: true,
        isGameOver: true
      },
      {
        id: 32,
        text: `You discover that having maternity leave gaps in someone's experience is not a liability and brings valuable experiences and perspectives ,liability and provide a fair opportunity
        
        You learn that in some ATS, applicants who had maternity leave gaps in their resumes were being flagged as a liability and screened out (Liberatore, 2023).
        
        Hence, it is ethical to not consider career gaps as a libability and provide a fair screening opportunity to all applicants.`,
  
        image: "https://i.ibb.co/9spLbqG/Diverse-Team.png",
        altText: `A diverse team of people smiling and posing`,
        option1ID: 33,
        option1text: `You finished screening candidates. Now you will move onto the interviewing stage.`,
        isTransition: true
      },
      {
        id: 33,
        text: `You’re now in the interviewing stage.
  
        You have quite a few candidates to interview and responsibilities for projects on your team that you also need to take care of simultaneously. 
        
        You know that if you continue to thoroughly interview all these candidates yourself, you won’t be abe to meet your project deadlines and select the hire in 2 weeks.
        
        You start to research possible technologies to use in the interview process. The company has used HireVue in the past and you think it would help expedite the process.`,
        image: "https://i.ibb.co/84zhsv1/Considering-Hire-Vue.png",
        altText: `A person considering whether to use HireVue on their laptop`,
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
        image: "https://i.ibb.co/NYL1KQR/Man-Giving-AThumbs-Up.png",
        altText: `A man giving his approval with a thumbs up`,
        option1ID: 37,
        option1text: `Continue.`,
        isTransition: true
      },
      {
        id: 35,
        text: `The company’s system uses the candidates’ camera to analyze their facial movements, word choice, and speaking voice before ranking them against other applicants based on an automatically generated 
        “employability” score.” The system then creates a computer-generated estimate of the candidates’ skills and behaviors, including their “willingness to learn” and “personal stability.”
  
        You also check in with HR about past candidate experiences. Most candidates have not submitted feedback about the tool but there are a few bad reviews that indicate candidate displeasure. 
        
        A recent news article by the Washington Post also highlights that the Electronic Private Information Centre, or EPIC, said that HireVue’s AI-driven assessments produce results that are 
        “biased, unprovable and not replicable” and could unfairly score someone based on prejudices related to their gender, race, sexual orientation or neurological differences (Harewell, 2019).`,
        image: "https://i.ibb.co/TgVcB82/Camera-Analysis.png",
        altText: `A futuristic image of AI camera analysis`,
        option1ID: 37,
        option1text: `You decide to go ahead with the technology but make it a small part of the decision-making process. 
  
        This way, you can conduct interviews faster and the technology will help give a baseline to compare all the interviewees.`,
        option2ID: 40,
        option2text: `After reading through the article, you decide that it would be the most equitable approach to go through with interviews manually.`,
      },
      {
        id: 36,
        text: `You recall doing some AI-supported calls as an interviewee in the past and remember how it impacted your confidence. 
        
        You felt as if there was minimal opportunity to showcase your skill set during the interview and provided shorter interview answers since there was a lack of genuine interaction. 
        You recall your African-American friend also telling you that they had a frustrating and discriminatory experience where the algorithm did not even recognize them. 
        You don’t want to put anyone else through that process. 
  
        To combat the looming deadlines, you loop in other members of your team to help with the interviewing process and host a detailed meeting before interviews start to answer any questions 
        and align the team on the best practices to avoid bias to even the playing field as much as possible for all candidates.
        
        You tell the team to go in blind into the interviews to avoid unconscious biases and create a set of defined questions to allow interviewers to focus on the factors that have a direct 
        impact on the candidate’s work. You also use an interview scorecard that grades candidates’ responses on a per-determined scale and have 2 interviewers attend each interview. 
        
        Interviews went a bit over the deadline but they were a success and the team is excited about a few diverse candidates who made it past interviews`,
        image: "https://i.ibb.co/dj4zNZt/Business-Meeting.png",
        altText: `A business meeting`,
        option1ID: 41,
        option1text: `Move to post selection.`,
        isTransition: true,
      },
      {
        id: 37,
        text: `After the interviews are completed, you notice something odd about the employability scores of some of the candidates. 
  
        Nicole, who was a stellar candidate and great communicator during the technical interview, was rated much lower than Steve, who you found to be a bit off-putting. 
        You dive deeper into the information that the algorithm gathered for both candidates and begin to worry.
        
        Nicole was well-dressed for the interview and answered confidently in the allotted time. The algorithm caught the positive keywords she used as well. 
        However, the algorithm has indicated that she looked angry and was not well-suited to the job due to a bad temper. Comparatively, Steve’s score is pretty accurate.  
        
        You do some more digging and find that facial-analysis software shows an error rate of 0.8 percent for light-skinned men compared to 34.7 percent for dark-skinned women. 
        Machine Learning Automated Decision Making, or ML-ADM, often exhibits gender and skin-type bias that is unfair to women and incorrectly assessed Nicole’s facial expressions and tone (Hardesty, 2018).`,
        image: "https://i.ibb.co/8mB18Hm/woman.jpg",
        altText: `A woman doing an interview`,
        option1ID: 38,
        option1text: `You decide to trust the algorithm and reject candidates like Nicole due to an extremely low score by HireVue.`,
        option2ID: 39,
        option2text: `You decide to go with your gut and move candidates like Nicole forward, despite the extremely low score by HireVue.`,
      },
      {
        id: 38,
        text: `Due to your decision, the final batch of candidates after interviews is made up of only white males. 
  
        Nicole asks how she could improve after receiving a rejection email and you aren’t able to explain why the AI hiring system believed she was unfit for the role.
        
        The final batch of candidates after interviews is not as diverse as it would have been had you not put your full faith in the algorithm. 
        
        A recent news article by the Washington Post also highlights that the Electronic Private Information Centre, or EPIC, said that HireVue’s AI-driven assessments produce results that unfairly score people based on prejudices related to their gender, race, sexual orientation or neurological differences (Harwell, 2019). It's disappointing to see this reflected so personally in your own experience.`,
        altText: `Game Over `,
        isGameOver: true
      },
      {
        id: 39,
        text: `Due to your decision, the final batch of candidates after interviews is more diverse than it would have been had you listened to the algorithm`,
        image: "https://i.ibb.co/3Ytx36L/Diverse-Candidates.jpg",
        altText: `A diverse team discussing at a meeting table`,
        option1ID: 41,
        option1text: `Move to post selection.`,
        isTransition: true
      },
      {
        id: 40,
        text: `To combat the looming deadlines, you pull in other members of your team to help with the interviewing process and host a detailed meeting before interviews start to answer any questions and align the team on the best practices to avoid bias to even the playing field as much as possible for all candidates.
  
        You tell the team to go in blind in the interviews to avoid unconscious biases and create a set of defined questions to allow interviewers to focus on the factors that have a direct impact on the candidate's work. You also use an interview scorecard that grades candidates’ responses on a per-determined scale and have 2 interviewers attend each interview. 
        
        Interviews went a bit over the deadline but they were a success and the team is excited about a few diverse candidates who made it past interviews.`,
        image: "https://i.ibb.co/dj4zNZt/Business-Meeting.png",
        altText: `A business meeting`,
        option1ID: 41,
        option1text: `Move to post selection.`,
        isTransition: true
      },
      {
        id: 41,
        text: `You have successfully selected a few candidates to hire! As the engineering manager, you are now responsible for choosing starting salaries for the new hires based on roles, experience, and market standards. 
  
        The company has recently started using a SalaryAI tool to assist with setting compensation, and doing market analysis. The AI uses data analytics to set competitive salary offers for new hires. 
        The AI claims to optimize compensation packages by analyzing a vast array of market data, internal salary trends, and applicant's previous earnings.
  
        Using such an AI tool makes the process relatively easier and saves a lot of time. However, the AI system might have some unintentional biases. 
        
        Your company has hired for two key positions: Software Engineer and a UI Analyst. Both positions have top-tier candidates, Maya Khan and Nate Perez from minority backgrounds.
        SalaryAI returns with the salary suggestions: $80,000 for Sophia and $70,000 for Nate. However, you know the market rate for these positions at companies similar to yours is $100,000 for software engineering and $85,000 for marketing analysts.`,
        image: "https://i.ibb.co/gDNg1Bk/SalaryAI.jpg",
        altText: `Salary calculations on a laptop`,
        option1ID: 42,
        option1text: `Compare SalaryAI's figures with independent market research and review  Maya and Nate's qualifications thoroughly.`,
        option2ID: 43,
        option2text: `Trust AI's recommended salaries and pay packages, trusting the AI's analysis is comprehensive and objective.`,
      },
      {
        id: 42,
        text: `By manually checking, you understand the importance of human oversight in AI decisions, promoting equity and preventing bias. 
        
        You learn that while AI tools can be helpful, they must be regularly audited and adjusted to serve the company's values of fairness and equality. `,
        image: "https://i.ibb.co/ZV1VXFT/Learned-About-Helpful-AI.jpg",
        altText: `A man learning`,
        option1ID: 48,
        option1text: `The numbers are in, and the stage is set. PromoAI 2.0 has been adjusting its algorithm and meticulously evaluating your team's performance, and destinies are about to change. Some will rise, while others may stay on their current path. Time to find out who's the office superstar and who's been slacking off in the meme-sharing department!`,
        isTransition: true
      },
      {
        id: 43,
        text: `This, however, might perpetuate pay disparity based on BIPOC and gender.
        However, the offers feel unsettlingly low for Maya and Nate.
        News breaks that companies like Uber and Doordash's complex pay algorithms have also been criticized for their potential to perpetuate unfair pay outcomes due (Subramaniam, V. 2023).
        
        If you make the offers as suggested, Nate and Maya might soon discover they are being paid less than market rates and less than their peers for similar roles.
        
        RISK: Your decision can lead to turnover issues. Could this be a sign of deeper problems?`,
        image: "https://i.ibb.co/58qKPdT/Uber-Door-Dash-News.jpg",
        altText: `News about Uber and Doordash`,
        option1ID: 44,
        option1text: `Being mindful of the legal issues and employee dissatisfaction, you choose to dig deeper. `,
        option2ID: 45,
        option2text: `Choose to go ahead with the AI suggested pay confidently as they align with the organization’s values of data-driven decisions and AI’s “unbiasedness".  `,
      },
      {
        id: 45,
        text: `Due to AI’s inherent biases, the company now faces legal action. The decision leads to internal unrest and public scrutiny as employees begin to openly discuss the clear disparity in compensation adjustments and a PR nightmare that damages the company's reputation.`,
        altText: `Game Over`,
        isGameOver: true
  
      },
      {
        id: 44,
        text: `It seems you might have made the right choice! You can see that based on historical data and current employees' in that role, SalaryAI suggested a lower salary for Nate for this analyst role and Maya for the engineering role. 
        
        SalaryAI recommends salaries for new hires that are surprisingly lower for women and minority groups, despite their similar qualifications to other candidates. It has been factoring in past salaries, perpetuating systemic underpayment of minorities. 
        It heavily factors in previous candidates' salaries and although Maya and Nate are excellent candidates, salaries are way below market rate due to the systematic underpayment of minorities in technology industry. 
        
        Despite this bias, you realize manually searching for market rate is time-consuming.`,
        image: "https://i.ibb.co/BqTmhsG/Salary-Recommendations.jpg",
        altText: `People smiling behind a screen`,
        option1ID: 46,
        option1text: `Decide to go ahead with the suggested salaries by AI and adjust it manually to ensure pay equity. You adjusted Maya's offer to ensure parity, mindful of the company's commitment to diversity and equality. `,
        option3ID: 53, 
        option3text: 'Immediately increase Maya and Nates pay, notify HR, and launch an audit of SalaryAI to ensure future fairness.',
        option2ID: 47,
        option2text: `Go ahead with Salary AI’s suggestions and collaborate with the team to send the new hires their respective pay and benefits package. `,
      },
      {
        id: 53,
        text: `The bias audit report is troubling. SalaryAI's algorithms do exhibit subtle biases mirroring common societal ones.  
        Working with developers, you implement adjustments and delay reviews until the model is fairer. This costs time but bolsters trust.`,
        image: "https://i.ibb.co/2d7rYKZ/Bias-Audit-Report.jpg",
        altText: `Two people working at a table with an audit report in the background`,
        option1ID: 48,
        option1text: `Proceed with the re calibrated AI, mindful you'll need spot-checks to ensure its ongoing fairness.`,
        option2ID: 51, 
        option2text: 'Initiate a company-wide ethics training program on AI bias, emphasizing the importance of human oversight',
      },
      {
        id: 46,
        text: `By manually checking,  you understand the importance of human oversight in AI decisions, promoting equity and preventing bias. You learn that while AI tools can be helpful, they must be regularly audited and adjusted to serve the company's values of fairness and equality.`,
        image: "https://i.ibb.co/KK6FhXB/AITools-Should-Be-Audited.jpg",
        altText: `A man auditing AI tools`,
        option1ID: 48,
        option1text: `The numbers are in, and the stage is set. PromoAI 2.0 has been adjusting its algorithm and meticulously evaluating your team's performance, and destinies are about to change. Some will rise, while others may stay on their current path. Time to find out who's the office superstar and who's been slacking off in the meme-sharing department!`,
        isTransition: true
      },
      {
        id: 47,
        text: `Due to AI’s inherent biases, the company now faces legal action. The decision leads to internal unrest and public scrutiny as employees begin to openly discuss the clear disparity in compensation adjustments and a PR nightmare that damages the company's reputation.`,
        altText: `game over`,
        isGameOver: true
      },
      {
        id: 48,
        text: ` 2 years later......
        
        It has now been 2 years and it's time for performance reviews and potential promotions!, PromoAI 2.0 tool is being used now which is trained on evaluating performance, and managing promotions. 
        It is designed to assist in promotion decisions, performance evaluations, and salary adjustments. The system analyzes employee performance data(e.g. project contribution), feedback, and historical trends to make recommendations. 
        
        PromoAI 2.0 is ready, but recent news of biased facial analysis tools has you on edge. HR team member mentions in the ethics training that studies highlight potential for gender, minority, and age biases in AI-driven performance evaluations (Sanaullah, N. 2020). 
        Sometimes, predictive tools that rely on analysis of facial, audio, or physical interaction with a computer increase the risk that individuals will be automatically rejected or scored lower on the basis of disabilities, race, and other protected characteristics (Askelrod, O. 2023).
        
        Decision: You are tasked with reviewing the AI-recommended list of employees for promotions and salary increases. The system has also provided a percentile ranking for each employee based on their performance metrics. Deadline looms...what do you do?`,
        image: "https://i.ibb.co/pf3bmBK/Evaluate-Performance-Using-AI.jpg",
        altText: `Performance evaluation using AI`,
        option1ID: 49,
        option1text: `Choose to do a combined approach of manual, spot checking and review AI-generated evaluations.`,
        option2ID: 50,
        option2text: `Trust Gen AI's comprehensive analysis. It's been trained extensively and manual review is time-consuming.`,
      },
      {
        id: 49,
        text: `Recently, news breaks about a MAC employee fired after AI-powered facial analysis flagged her as disengaged, demonstrating the real-world risks of biased performance reviews (Nachiappan, A. 2024).
        
        As you review the list, you spot concerning patterns. 
        
        You notice that the top 10% recommended for significant promotions and raises are predominantly male, despite the workforce being more diverse. 
        Upon a closer examination, you find that most of the female employees and those from minority groups are clustered around the middle or bottom of the percentile rankings.
        You notice concerning patterns. Some older employees seem to be consistently rated lower, despite positive feedback from their managers.  Additionally, a few women on your team have been tagged with terms like "needs more assertiveness."`,
        image: "https://i.ibb.co/7j2FB9r/Top-Recommendation-Is-Male.jpg",
        altText: `Business meeting to discuss candidate performance review`,
        option1ID: 51,
        option1text: `Intervene and adjust the promotions based on your employees' merit.`,
        option2ID: 52,
        option2text: `Accept the scores as they are and send the new findings to the your team to re-train the model, concerned that manual adjustments might be subjective.`,
      },
      {
        id: 51,
        text: `Success! Congratulations! You have successfully navigated through the entire process of hiring a candidate and completed the simulation. Most of your decisions led to an improved workplace culture, and higher employee morale, and bolstered the company’s reputation for fairness. Well done!"`,
        altText: `Success`,
        isSuccess: true
      },
      {
        id: 52,
        text: `Failure :(. Unfortunately, the decision to follow AI recommendations without scrutiny resulted in overlooking qualified candidates, fostering workplace bias, and leading to a loss of talent. Soon, discontent simmers.
        Seasoned employees, many from minority groups,  feel undervalued. Morale plummets, and several talented individuals start leaving. The company faces backlash, with rumors of ageism and gender discrimination brewing
        This serves as a hard lesson on the importance of human oversight in AI processes.`,
        altText: `game over`,
        isGameOver: true
      },
      {
        id: 50,
        text: `Unfortunately, AI’s recommended list had inherent age and gender bias. 
        
        AI tool disproportionately recommended higher bonuses for the young tech team, most of whom are male. Seasoned employees in support roles, including many from minority groups, have been recommended much lower bonuses or none at all. 
        
        Company culture suffers as seasoned and minority employees feel undervalued. 
  
        Unfortunately, the decision to follow AI recommendations without scrutiny resulted in overlooking qualified candidates, fostering workplace bias, and leading to a loss of talent. 
        This serves as a hard lesson on the importance of human oversight in AI processes.
        You have failed the simulation! Restart the simulation. 
        `,
        altText: `Game Over`,
        isGameOver: true
      }
  ]
}

module.exports = gamePromptPage