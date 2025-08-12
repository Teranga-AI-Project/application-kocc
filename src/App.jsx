import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 flex'>
      <Sidebar />
      <div className='flex-1 p-8'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-gradient from-[#4e95c5] to-[#385dc3] mb-4'>Kocc Summary</h2>

          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6'>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Summarize this text for me, "First, I would like to thank the President of Brazil,
              Dilma Rousseff, for the warm welcome she has given us for this conference. I
              commend the work she is doing for Brazil, which is now a reference both in the
              North and the South in terms of development.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              However, I personally wanted to come here for this conference on behalf of
              France. First, because this is a decisive issue for the planet, and France must be
              one of the nations that lead by example.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              I also wanted to make commitments for my country here while promoting, as much
              as possible, discussion and negotiation in the final declaration."
            </p>
          </div>

          <div className='bg-blue-50 rounded-2xl p-6 border border-blue-100'>
            <div className='flex items-start space-x-4'>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-white text-sm font-bold'>K</span>
              </div>
              <div className='flex-1'>
                <p className='text-sm text-gray-600 mb-2'>Here's a summary of the text:</p>
                <p className='text-gray-800 leading-relaxed'>
                  The speaker expresses gratitude to President Dilma Rousseff for her warm welcome and commends
                  her leadership in Brazil, which serves as a model for development globally. The speaker also
                  emphasizes the importance of the conference for the planet and France's role in leading by example.
                  Additionally, the speaker is committed to making pledges for France and promoting discussions and
                  negotiations for the final declaration.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-center space-x-4'>
            <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
              </svg>
            </button>
            <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
            <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.453 4.167 9 5 9h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App