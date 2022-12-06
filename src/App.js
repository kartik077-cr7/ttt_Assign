import Button from "./components/Button/Button";
import { getContent } from "./actions/getContent";
import { useState } from "react";
import Histogram from "./components/Histogram/Histogram";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";
import './App.css';

function App() {

	const [clicked,setClicked] = useState(false);
  const [cData,setCData] = useState([]);
  const [loading,setLoading] = useState(false);

	const handleClick = async() => {

		setClicked(true);
		setLoading(true);

    const data_received = await getContent();
		var text = "";
		const wordCount = {};

		for(var i = 0 ; i < data_received.length ; i++)
		{
        if( (data_received[i] >= 'a' && data_received[i] <='z') || 
				    (data_received[i] >= 'A' && data_received[i] <='Z') || 
						 data_received[i] === '\''
					)
					  text+=data_received[i];
					else
					{
						 if(text.length > 0)
						 {
							 if(!wordCount[text])
							 {
							 	wordCount[text] = 1;
							 }
							 else
							  wordCount[text] += 1;
							 text = "";
						 }
					}
		}

		let data_list = [];

		for(var word in wordCount)
			data_list.push([ word , wordCount[word] ]);
		
		data_list.sort(function(a,b){
			return b[1] - a[1];
		})

		data_list = data_list.slice(0,20);

		setCData(data_list);
		setLoading(false);
	};

  return (
    <div className = 'main-app'>
       { !clicked && <Button handleClick = { handleClick } /> }
			 { !loading ? ( clicked ? <Histogram cData={cData}/> : <></> ) : <LoadingSpinner/> }
		</div>
  );
}

export default App;
