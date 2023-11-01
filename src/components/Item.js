import React, { useEffect } from 'react';
import Card from './Card';
/*
 Fetch items and Display
 and also Get Props form Home to filter
 
*/
export default function Item() {
  return (
    <div className="my-5 mx-3">
      <div className="h2 mb-4 ms-5">Stater</div>
      <hr/>
    <div className="row d-flex flex-wrap">
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <Card/>
        </div>
    </div>
    </div>
  )
}
