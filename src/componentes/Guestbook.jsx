import React, { useState, useEffect } from 'react';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 컴포넌트 마운트 시 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('guestbookEntries'));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  // entries 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('guestbookEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.trim() !== '') {
      const newEntryObject = {
        id: Date.now(),
        text: newEntry,
        date: new Date().toLocaleString()
      };
      setEntries(prevEntries => [...prevEntries, newEntryObject]);
      setNewEntry('');
    }
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    setEntries(prevEntries => prevEntries.map(entry =>
      entry.id === id ? { ...entry, text: editText } : entry
    ));
    setEditingId(null);
  };

  return (
    <div className='md:max-w-full max-w-screen-md m-[1rem] bg-[#272727] p-4 rounded-lg flex flex-col h-[600px]'>
      <h1 className='mb-4 text-lg font-bold text-white md:text-2xl'>감상평 작성하기</h1>
      <div className='flex-grow overflow-y-auto mb-4'>
        <ul className='text-base'>
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
      <form onSubmit={handleSubmit} className='mt-auto'>
        <input
          type='text'
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder='방명록을 작성해주세요'
          className='w-full p-2 text-base border rounded'
        />
        <button type='submit' className='w-full px-4 py-2 mt-3 text-base text-white bg-pink-500 rounded shadow-lg hover:bg-pink-600'>
          등록하기
        </button>
      </form>
    </div>
  );
};

export default Guestbook;