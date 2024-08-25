import React, { useState, useEffect } from 'react';

const Guestbook = () => {
  // 방명록 엔트리들을 저장하는 상태
  const [entries, setEntries] = useState([]);
  // 새 엔트리 입력을 위한 상태
  const [newEntry, setNewEntry] = useState('');
  // 현재 편집 중인 엔트리의 ID를 저장하는 상태
  const [editingId, setEditingId] = useState(null);
  // 편집 중인 텍스트를 저장하는 상태
  const [editText, setEditText] = useState('');

  // [로컬 스토리지 데이터를 로드하는 효과]
	// 웹페이지가 렌더링 된 이후에 사용됨
  useEffect(() => {
    try {
			const storedEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];
      // 로컬 스토리지에서 데이터를 불러오거나, 없으면 빈 배열을 사용
			// 브라우저의 로컬 스토리지에서 'guestbookEntries' 키에 해당되는 값을	가져옴.

			//JSON.Parse ??
			//가져온 문자열을 jsvaScript 객체나 배열로 변환해줌.
			
			// || [] ??
			//로컬 스토리지가 없을 경우, 빈 배열을 기본값으로 사용함.

			// [디버깅을 위한 로그]
      // 디버깅? 프로그램의 버그(오류)를 찾아내고 수정하는 과정을 말함.
      console.log('Loaded entries:', storedEntries); 
			
			//[상태 업데이트]
			setEntries(storedEntries);

			//[예외 처리]
    } catch (error) {
      console.error('Error loading entries from localStorage:', error);
			//잘못된 형식으로 데이터를 입력하는 것을 방지하기 위함.
			//로컬 스토리지에 접근할 수 없을때.(사용자가 로컬 스토리지를 비활성화 한 경우)
    }
  }, []);

  // [entries 상태가 변경될 때마다 실행 됨.]
	// entries 상태가 업데이트될 때 마다 로컬 스토리지에 최신 데이터를 저장하는 역할을 함
	useEffect(() => {
    try {
      localStorage.setItem('guestbookEntries', JSON.stringify(entries));
			//localStorage.setItem ??
			// 브라우저의 로컬 스토리지에 데이터를 저장함

			// 저장할 데이터 키 key [guestbookEntries]

      console.log('Saved entries:', entries); // 디버깅을 위한 로그
    } catch (error) {
      console.error('Error saving entries to localStorage:', error);
    }
  }, [entries]);

  // [새 엔트리 제출 처리 함수]
  const handleSubmit = (e) => {
		// 폼 제출 이벤트를 처리하는 함수
		// 화살표 함수 문법
    
		e.preventDefault();
    //페이지 새로고침을 방지함
		
		if (newEntry.trim() !== '') {
			// 문자열 앞, 뒤 공백을 제거함
			// 빈 문자열이 아닌 경우에만 로직을 실행하여 빈 항목이 추가되는 것을 방지

			//[ 새 엔트리 객체 생성]
      const newEntryObject = {
        id: Date.now(),
        text: newEntry,
        date: new Date().toLocaleString()
				//text 는 newEntry 값을 사용함
				//date 는 현제날짜와 시간을 로컬 형식의 문자열로 저장함
				
      };
      // [엔트리 목록에 새 엔트리 추가]
      setEntries(prevEntries => [...prevEntries, newEntryObject]);
			//setEntries 함수를 사용하여 entries 상태를 업데이트함
			// ... 스트레드 연산자를 사용하여 이전 엔트리를 복사하며 배열끝에 추가함

			
      // [입력 필드 초기화]
      setNewEntry('');
      console.log('New entry added:', newEntryObject); // 디버깅을 위한 로그
    }
  };

  // [엔트리 편집 모드 활성화 함수]
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // [편집된 엔트리 저장 함수]
  const handleSave = (id) => {
    // 해당 ID의 엔트리 텍스트 업데이트
    setEntries(prevEntries => prevEntries.map(entry =>
      entry.id === id ? { ...entry, text: editText } : entry
			//map 함수를 사용하여 모든 엔트리를 순회합니다:
				// 만약 엔트리의 id가 편집 중인 엔트리의 id와 일치하면:
					
					//스프레드 연산자(...entry)를 사용하여 기존 엔트리의 모든 속성을 복사합니다.
					//text 속성만 editText로 업데이트합니다.

					//일치하지 않는 엔트리는 그대로 유지합니다.	
    ));

    //[편집 모드 종료]
    setEditingId(null);
		//setEditingId 함수를 호출하여 editingId 상태를 null로 설정합니다.
    //이는 편집 모드를 종료하고, UI를 일반 표시 모드로 전환하는 역할을 합니다.
    
		console.log('Entry edited:', id); // 디버깅을 위한 로그
  };

	return (
    <div className='md:max-w-full max-w-screen-md m-[1rem] bg-[#272727] p-4 rounded-lg  display: flex; flex-direction: column; justify-content: center; flex-1'>
      <h1 className='mb-4 text-lg font-bold text-white md:text-2xl '>감상평 작성하기</h1>
      <form onSubmit={handleSubmit} className='mb-4'>
        <input
          type='text'
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder='방명록을 작성해주세요'
          className='w-full p-2 text-lg border rounded'
        />
        <button type='submit' className='float-right px-4 py-2 mt-3 text-base text-white bg-pink-500 rounded shadow-lg hover:bg-pink-600'>
          등록하기
        </button>
      </form>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id} className='p-2 mb-2 bg-gray-100 rounded'>
            {editingId === entry.id ? (
              <>
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='w-full p-1 mb-2 border rounded'
                />
                <button onClick={() => handleSave(entry.id)} className='px-2 py-1 mr-2 text-white bg-green-500 rounded hover:bg-green-600'>
                  저장
                </button>
                <button onClick={() => setEditingId(null)} className='px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600'>
                  취소
                </button>
              </>
            ) : (
              <>
                <p>{entry.text}</p>
                <small className='text-gray-500'>{entry.date}</small>
                <button onClick={() => handleEdit(entry.id, entry.text)} className='px-2 py-1 ml-2 text-white bg-yellow-500 rounded hover:bg-yellow-600'>
                  수정
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guestbook;