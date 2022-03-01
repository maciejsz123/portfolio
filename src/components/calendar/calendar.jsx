import React, { Component } from 'react';
import './kalendarz.css';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      getMonthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      entries: [],
      checkedDay: new Date().getUTCDate().toString(),
      checkedMonth: new Date().getMonth()+1,
      checkedYear: new Date().getFullYear().toString()
    }
  }

  componentDidMount() {
    this.createCallendar(new Date().getMonth()+1, new Date().getFullYear());
    let callendar = document.getElementById("callendar-cal");
    callendar.addEventListener("click", this.showCallendarEntries.bind(this));
  }

  createCallendar(month, year) {
    //creating Head of table
    let table = document.getElementById("callendar-cal");
    table.innerHTML = "";

    let caption = document.createElement("caption");

    let leftArrow = document.createElement("span");
    leftArrow.setAttribute("id", "leftArrow");
    leftArrow.innerHTML = "◄";
    leftArrow.addEventListener("click", () => {
      if(month===1) {
        this.createCallendar(12,year-1);
      } else {
        this.createCallendar(month-1,year);
      }
    });
    let rightArrow = document.createElement("span");
    rightArrow.setAttribute("id", "rightArrow");
    rightArrow.innerHTML = "►";
    rightArrow.addEventListener("click", () => {
      if(month===12) {
        this.createCallendar(1, year + 1);
      } else {
        this.createCallendar(month+1,year);
      }
    });

    caption.innerHTML = this.state.getMonthName[month-1] + " " + year;
      caption.prepend(leftArrow);
      caption.append(rightArrow);
    table.append(caption);

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    tr.innerHTML = "<th>pon</th><th>wt</th><th>śro</th><th>czw</th><th>pt</th><th>sob</th><th>nie</th>";
    thead.append(tr);
    table.append(thead);

    let firstDayOfMonth = new Date(year,month-1,1).getDay();
    firstDayOfMonth += firstDayOfMonth===0 ? 7 : 0;
    let numberOfDays = new Date(year, month, -1).getDate()+1;
    let numberOfWeeks = 0;
    if((firstDayOfMonth === 7 && numberOfDays >= 30) || (firstDayOfMonth === 6 && numberOfDays === 31)) {
      numberOfWeeks = 6;
    } else if(firstDayOfMonth ===1 && numberOfDays === 28) {
      numberOfWeeks = 4;
    } else {
      numberOfWeeks = 5;
    }
    let daysNumberCounter = 1;

    //creating body of the table
    for(let i=0; i<numberOfWeeks;i++) {
      let tr = document.createElement('tr');
      if(i===0) {
        for(let j=0;j<7;j++) {
          let td = document.createElement('td');
          if(j>=firstDayOfMonth-1) {
            td.innerHTML = daysNumberCounter;
            td.setAttribute("class", "dayInCallendar");
            daysNumberCounter++;
          } else {
            td.innerHTML = "";
          }
          tr.append(td);
        }
      } else {
        for(let j=0;j<7;j++) {
          let td = document.createElement('td');

          if(daysNumberCounter>numberOfDays) {
            td.innerHTML = "";
          } else {
            td.innerHTML = daysNumberCounter;
            td.setAttribute("class", "dayInCallendar");
            daysNumberCounter++;
          }
          tr.append(td);
        }
      }
      table.append(tr);
    }
  }

  showCallendarEntries(event) {
    if(event.target.tagName !== "TD" || event.target.innerHTML ==="") return;
    let date = document.querySelector("table > caption").childNodes[1].nodeValue;

    this.setState({
      checkedDay: document.getElementById("callendarInputDay").value = event.target.innerHTML,
      checkedMonth: document.getElementById("callendarInputMonth").value = this.state.getMonthName.indexOf(date.substring(0, date.length-5))+1,
      checkedYear: document.getElementById("callendarInputYear").value = date.substring(date.length-4, date.length)
    })
  }

  removeItem(e) {

    let filtered = this.state.entries.filter( entry => {
      let entryValues = entry[0].split(',');
      let text = e.target.closest('p').innerText;

      if(! (this.state.checkedYear === entryValues[0] &&
        this.state.checkedMonth === parseInt(entryValues[1]) &&
        this.state.checkedDay === entryValues[2] &&
        text.substring(0,5) === entryValues[3] &&
        entry[1] === text.substring(6, text.search('✖')).trim()
      ) ) {
        return entry;
      }
    });
    this.setState({entries: filtered})
  }

  makeCallendarEntry(e) {
    e.preventDefault();
    let description = e.target.children[0].value;

    let year = e.target.children[1].value;
    let month = e.target.children[2].value;
    let day = e.target.children[3].value;
    let hour = (e.target.children[4].value ? e.target.children[4].value : '12:00' );
    let entries = [...this.state.entries, [year+","+month+","+day+","+hour, description] ];

    let countEntriesToday = entries.filter( entry => {
      if(entry[0].substring(0, entry[0].lastIndexOf(',')) === year+","+month+","+day) {
        return entry;
      }
    });

    if(!description.trim() || countEntriesToday.length >= 8) {
      return ;
    }

    let noDuplicates = entries.filter( (entry, num) => {
      let count = 0;
      for(let i=0; i<num + 1; i++) {
        if(JSON.stringify(entry) === JSON.stringify(entries[i])) {
          count++;
        }
      }

      if(count === 1) {
        return entry
      }
    })

    this.setState({entries: noDuplicates});
  }

  clearCallendar() {
    this.setState({entries: []});
  }

  changeInput(e) {
    let title = e.target.attributes[1].value;
    if((title === 'checkedDay' && e.target.value < 1) || (title === 'checkedDay' && e.target.value > 31) ||
        (title === 'checkedMonth' && e.target.value < 1) || (title === 'checkedMonth' && e.target.value > 12)) {
      return ;
    }
    let value = e.target.value
    if(title === 'checkedMonth') {
      value = Number(e.target.value);
    }
    this.setState({
      [title]: value
    });
  }

  render() {
    let entries = this.state.entries.map( (entry,i) => {
      let date = entry[0].split(",");
      let year = date[0];
      let month = date[1];
      let day = date[2];
      let hour = date[3];
      if(year===this.state.checkedYear && Number(month)===this.state.checkedMonth && day===this.state.checkedDay) {
        return <p key={i}>{hour + " " + entry[1]}<span className='deleteButton' onClick={this.removeItem.bind(this)}>&#10006;</span></p>
    }});

      return(
        <div className='body-cal'>
          <div className="wrapper-cal">
            <div className="container-cal">
              <table id="callendar-cal">
              </table>
            </div>
            <div className="callendarEntries">
              <p>{this.state.checkedDay + " " + this.state.getMonthName[this.state.checkedMonth - 1] + " " + this.state.checkedYear}</p>
              {entries}
            </div>
            <div className="newCallendarEntry">
              <form onSubmit={this.makeCallendarEntry.bind(this)}>
                <input id="callendarInputDescription" type="text" placeholder="Description"></input>
                <input id="callendarInputYear" data-state='checkedYear' type="number" placeholder="year" value={this.state.checkedYear} onChange={this.changeInput.bind(this)}></input>
                <input id="callendarInputMonth" data-state='checkedMonth' type="number" placeholder="month" value={this.state.checkedMonth} onChange={this.changeInput.bind(this)}></input>
                <input id="callendarInputDay" data-state='checkedDay' type="number" placeholder="day" value={this.state.checkedDay} onChange={this.changeInput.bind(this)}></input>
                <input id="callendarInputHour" type="time" placeholder="hour"></input>
                <br/>
                <button>add new Entry</button>
              </form>
            </div>
          </div>
          <button type="button" onClick={this.clearCallendar.bind(this)}>clear all entries</button>
        </div>
    )
  }
}

export default Calendar;
