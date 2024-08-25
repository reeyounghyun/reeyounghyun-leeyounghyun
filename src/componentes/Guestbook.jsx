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

  // 컴포넌트 마운트 시 로컬 스토리지에서 데이터를 로드하는 효과
  useEffect(() => {
    try {
      // 로컬 스토리지에서 데이터를 불러오거나, 없으면 빈 배열을 사용
      const storedEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];
      console.log('Loaded entries:', storedEntries); // 디버깅을 위한 로그
      setEntries(storedEntries);
    } catch (error) {
      console.error('Error loading entries from localStorage:', error);
    }
  }, []);

  // entries 상태가 변경될 때마다 로컬 스토리지에 저장하는 효과
  useEffect(() => {
    try {
      localStorage.setItem('guestbookEntries', JSON.stringify(entries));
      console.log('Saved entries:', entries); // 디버깅을 위한 로그
    } catch (error) {
      console.error('Error saving entries to localStorage:', error);
    }
  }, [entries]);

  // 새 엔트리 제출 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.trim() !== '') {
      // 새 엔트리 객체 생성
      const newEntryObject = {
        id: Date.now(),
        text: newEntry,
        date: new Date().toLocaleString()
      };
      // 엔트리 목록에 새 엔트리 추가
      setEntries(prevEntries => [...prevEntries, newEntryObject]);
      // 입력 필드 초기화
      setNewEntry('');
      console.log('New entry added:', newEntryObject); // 디버깅을 위한 로그
    }
  };

  // 엔트리 편집 모드 활성화 함수
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // 편집된 엔트리 저장 함수
  const handleSave = (id) => {
    // 해당 ID의 엔트리 텍스트 업데이트
    setEntries(prevEntries => prevEntries.map(entry =>
      entry.id === id ? { ...entry, text: editText } : entry
    ));
    // 편집 모드 종료
    setEditingId(null);
    console.log('Entry edited:', id); // 디버깅을 위한 로그
  };

	return (
    <div className='max-w-screen-md m-[1rem] bg-[#272727] p-4 rounded-lg  display: flex; flex-direction: column; justify-content: center; flex-1'>
      <h1 className='mb-4 text-2xl font-bold text-white '>감상평 기록하기</h1>
      <form onSubmit={handleSubmit} className='mb-4'>
        <input
          type='text'
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder='방명록을 작성해주세요'
          className='w-full p-2 border rounded'
        />
        <button type='submit' className='float-right px-4 py-2 mt-2 mt-3 text-white bg-pink-500 rounded shadow-lg hover:bg-pink-600'>
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