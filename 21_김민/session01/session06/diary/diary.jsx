import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Diary() {
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleEntryChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 일기 내용과 선택한 날짜를 저장하거나 처리할 수 있습니다.
    console.log('날짜:', date);
    console.log('일기 내용:', entry);
    setEntry('');
  };

  return (
    <div>
      <h1 className='title'>한 줄 일기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>날짜:</label>{' '}
          <DatePicker selected={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>일기:</label>{' '}
          <textarea
            value={entry}
            onChange={handleEntryChange}
            placeholder="오늘의 일기를 작성해주세요..."
            rows={10}
            cols={50}
          />
        </div>
        <br />
        <button type="submit">일기 저장</button>
      </form>
    </div>
  );
}

export default Diary;
