const gamePromptPage = {
  data: [
    {
      id: 0,
      text: 'Select your role. Choose betweeen 2 men who are 40, and 50 respectively and both white. Did you know that 7.4% of all engineering managers are women, while 92.6% are men and the most common ethnicity of engineering managers is white at 71.0%?',
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 1,
      option1text: `40 year old manager`,
      option2ID: 2,
      option2text: `50 year old manager`,
    },
    {
      id: 1,
      text: 'Your name is John, a 40 year old manager recently promoted at Avengers4U. \nYou’re first task is to hire a new software developer to join your team. This is your first time hiring someone. \nYou want to make a good impression on your team.\n The Talent Acquisition Specialist at Avengers4U offers you some resources to assist with hiring. ',
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 3,
      option1text: `You respectfully decline`,
      option2ID: 4,
      option2text: `You gladly take them up on their offer`
    },
    {
      id: 2,
      text: 'Your name is William, a 50 year old manager recently promoted at Avengers4U. \nYou’re first task is to hire a new software developer to join your team. his is your first time hiring someone. \nYou want to make a good impression on your team.\n The Talent Acquisition Specialist at Avengers4U offers you some resources to assist with hiring. ',
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
      
      You start by drafting the job description. You highlight the company’s commitment to diversity, aiming to attract a wide range of talented individuals. 

      You begin to picture the ideal candidate. A software engineer with 5 years of work experience that is not afraid to push the envelope. An ambitious and driven individual, active in the software development life cycle.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText:`Add alt text`,
      option1ID: 5,
      option1text: `You add these qualifications in the job description`,
      isTransition: true
    },
    {
      id: 4,
      text: `You decide to ask the Talent Acquisition Specialist for advice. Maura is glad that you reached out!

      Maura tells you that the job posting reflects implicit biases. Surprised, she continues that the word embeddings used by the Google News dataset answered the analogy that a man is a computer programmer and a woman is a homemaker. She explains that word embeddings are a way of representing words for text analysis in the form of real-valued vectors. These vectors preserve semantic and syntactic information, but they can also reflect social biases. The model trained on the Google News dataset, for example, associated certain occupations more closely with one gender than the other, reinforcing stereotypes. 

      This is why it's crucial to use language that doesn’t promote implicit biases, especially in the context of algorithms. Algorithms, particularly those used in natural language processing (NLP) and machine learning, can amplify biases present in the data they are trained on. If job postings use biased language, these biases can be learned and perpetuated by the algorithms, leading to unfair outcomes in candidate selection.

      Communal traits are typically associated with behaviors that involve nurturing, caring, and connecting with others. These traits are often stereotypically attributed to women, reflecting societal expectations around care giving and emotional labor. In job postings, communal language might include words like "collaborate," "support," and "connect," which can be seen as more inclusive and appealing to a diverse audience.

      On the other hand, agentic traits are associated with behaviors that involve assertiveness, independence, and achievement. These traits are often stereotypically attributed to men, reflecting societal expectations around leadership and competitiveness. In job postings, agentic language might include words like "ambitious," "driven," and "active”. Maura adds that the job portal at Avengers4U extrapolates the information from the job posting to show the job to the ideal candidate. In this case,  male applicants were more likely to see the job posting due to the use of agentic words. 
      
      You thank Maura for her help. You can't believe how naive you were. You decide to craft a job posting without the use of agentic words.
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
      text: `You want to get a new team member hired as soon as possible so you can move one to other tasks. You decide to write the job description as you decided, without getting approval from Talent Acquisition.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 6,
      option1text: `You are done writing the job posting.`,
      isTransition: true
    },
    {
      id: 6,
      text: `Maura, the Talent Acqusition, find out that a job posting to the job portal was published without approval. 
      
      Maura tells you that the job posting reflects implicit biases. She continues that the word embeddings used by the Google News dataset answered the analogy that a man is a computer programmer and a woman is a homemaker. She explains that word embeddings are a way of representing words for text analysis in the form of real-valued vectors. These vectors preserve semantic and syntactic information, but they can also reflect social biases. The model trained on the Google News dataset, for example, associated certain occupations more closely with one gender than the other, reinforcing stereotypes. 

      This is why it's crucial to use language that doesn’t promote implicit biases, especially in the context of algorithms. Algorithms, particularly those used in natural language processing (NLP) and machine learning, can amplify biases present in the data they are trained on. If job postings use biased language, these biases can be learned and perpetuated by the algorithms, leading to unfair outcomes in candidate selection.

      Communal traits are typically associated with behaviors that involve nurturing, caring, and connecting with others. These traits are often stereotypically attributed to women, reflecting societal expectations around care giving and emotional labor. In job postings, communal language might include words like "collaborate," "support," and "connect," which can be seen as more inclusive and appealing to a diverse audience.

      On the other hand, agentic traits are associated with behaviors that involve assertiveness, independence, and achievement. These traits are often stereotypically attributed to men, reflecting societal expectations around leadership and competitiveness. In job postings, agentic language might include words like "ambitious," "driven," and "active”. Maura adds that the job portal at Avengers4U extrapolates the information from the job posting to show the job to the ideal candidate. In this case, male applicants were more likely to see the job posting due to the use of agentic words. 
      
      You are surprised to hear this and Maura is disappointed that you did not take up on her offer for help.
      
      Consequently, Maura decides to takes over the hiring process. 

      You are disappointed in yourself.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    
    {
      id: 7,
      text: `Maura is glad you asked for approval. She recommends a tool named Textio, an augmented writing platform that employs AI to mitigate biased language in job descriptions. She explains that Textio uses natural language processing (NLP) to analyze job postings and suggest alternative language that is more inclusive and appealing to a diverse audience. Intrigued by the recommendation, you decide to give Textio a try, appreciating the opportunity to leverage technology to address the biases in your job posting.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 9,
      option1text: `You try using Textio`,
      option2ID: 8,
      option2text: "You try to take a shortcut and avoid using Textio",
    },
    {
      id: 8,
      text: `Maura is disappointed that you did not ask for approval. She explains that Textio is a tool they run job postings by to detect biased language and suggest alternative language. This way, the job posting can be appealing to a diverse audience. 

      You are disappointed that you did not ask for approval. It is important that the most qualified candidate is selected. Using tools like Textio ensure that no candidates are detered away from applying.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 9,
      text: `Intrigued by the recommendation, you decide to give Textio a try, appreciating the opportunity to leverage technology to address the biases in your job posting.
      
      Textio is a great tool! It highlights word choices that show gender bias and suggesting alternatives.
      Finally, you think you have a inclusive and bias free job posting. 

      Now, you must publish the job posting.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 11,
      option1text: `You are looking forward to publishing the job posting.`,
      isTransition: true
    },
    {
      id: 11,
      text: `The next step is determining where you will post the job posting. You want to target a wide range of qualified applicants. You decide that simply adding the posting to the Avengers4U hiring portal is not enough. You consider making a Google Ad to encourage people to apply.
      
      As you are making your ad, your coworker Dan walks by. Dan is a senior engineer on your team. Dan says “Hope Google Ads isn’t the only place you’re promoting the job” and walks by.
      
      You sit there confused. What did Dan mean? `,
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
      
      You post the advertisement and wait for all the talented applicants to apply.`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 14,
      option1text: `Wait for applicants to apply`,
      isTransition: true
    },
    {
      id: 14,
      text: `One week has passed. You decide to look through at the job portal to see who has applied. 
      
      Flipping through the applications, the first one is Tony Stark. He looks like a promising candidate, he made his own operating system. The second applicant is Steve Rogers, a civil engineer. The third applicant is Thor Odinson, a cloud engineer. As you flip through all 20 applications, you notice only 1 female applicant, Natasha Romanova. That’s weird, why was there a lack of diversity in this ad? 

      Feeling unmotivated, you decide to finally ask Dan what he meant about his Google Ad comment`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 13,
      option1text: `Ask Dan to explain what he meant`,
      isTransition: true
    },
    {
      id: 13,
      text: `You pick up the courage to ask Dan what he meant. Dan is happy to see you. He says “There was a study done on Google’s Ad system and it found that it was more likely to display ads for high paying positions to male users than female users”. You are shocked. How can this be true? 
      
      Dan continues, “The model was trained on historical data. It learned from patterns that men are generally represented in high paying jobs compared to women”.

      Based on this conversation, what is your next step?`,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      option1ID: 15,
      option1text: `Ignore what Dan said and continue to hire from these candidates.`,
      option2ID: 16,
      option2text: `You listen to Dan`
    },
    {
      id: 15,
      text: `Dan lets HR know about your conversation. They send you a warning that this would have been avoidable if you had excepted their help in the beginning. They take over hiring now. `,
      image: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg",
      altText: `Add alt text`,
      isGameOver: true
    },
    {
      id: 16,
      text: `You realize that only posting on advertisement on Google was not the right way to go. 
      
      You decide to make job postings on LinkedIn and Indeed to attract more applicants. Job postings should ensure an equal treatment of alll applicants. You decide that relying only on Google Ads will narrow your search for the most qualified applicant. 
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
      isGameOver: true
    },
  ]
}

module.exports = gamePromptPage