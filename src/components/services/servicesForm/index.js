import React,{ useState } from 'react';
import './form.style.scss';
import Input from '../../../utilities/input/index';

export default function NewTest(){

    const [ data,setData ] = useState({ 
        name : '',
        department : '',
        RT : '',
        price : '',
        maxAge : '',
        minAge : '',
        gender : 'male',
        minValue : '',
        maxValue : '',
        expectedValue : '',
        units : ''
    });
    const { name,department,RT,price,maxAge,minAge,gender,minValue,maxValue,expectedValue,units } = data;
    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData({...data, [name] : value})
    }
    return (
        <div className='test-wrapper'>
            <div className='box'>
                <div className='left'>
                    <h2 className='title'>New Test</h2>
                    <div className='test-form'>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Name' 
                            name='name' 
                            value={name} 
                            onChange={handleChange} 
                        />
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Department' 
                            name='department' 
                            value={department} 
                            onChange={handleChange} 
                            />
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='RT' 
                            name='RT' 
                            value={RT} 
                            onChange={handleChange} 
                            />
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Price' 
                            name='price' 
                            value={price} 
                            onChange={handleChange} 
                            />
                        </div>
                    </div>

                    <div className='parameter-wrapper'>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Name' 
                            value={name} 
                            name='name' 
                            onChange={handleChange}/>
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Max-age' 
                            value={maxAge} 
                            name='maxAge' 
                            onChange={handleChange}/>
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Min-age' 
                            value={minAge} 
                            name='minAge' 
                            onChange={handleChange}/>
                        </div>
                        <div className="radio-group">
                            <Input 
                            type="radio"
                            id='male'
                            name="gender" 
                            onChange={handleChange} 
                            value="male" 
                            label="Male" 
                            checked={gender === 'male' ? true : null}
                            />
                            <Input type="radio" 
                            name="gender"
                            id='female'
                            onChange={handleChange} 
                            value="female" 
                            label="Female"
                            checked={gender === 'female' ? true : null}
                            />
                            <Input 
                            type="radio" 
                            id='other'
                            name="gender" 
                            onChange={handleChange} 
                            value="other" 
                            label="Other" 
                            checked={gender === 'other' ? true : null}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Max-value' 
                            value={maxValue} 
                            name='maxValue' 
                            onChange={handleChange}/>
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Min-value' 
                            value={minValue} 
                            name='minValue' 
                            onChange={handleChange}/>
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Expected-value' 
                            value={expectedValue} 
                            name='expectedValue' 
                            onChange={handleChange}/>
                        </div>
                        <div className='input-wrapper'>
                            <Input 
                            type='text' 
                            label='Units' 
                            value={units} 
                            name='units' 
                            onChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'></div>



            
        </div>
    )
}