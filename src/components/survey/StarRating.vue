<script setup lang="ts">
let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i: any = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;

		showValue!.innerHTML = i + " out of 5";
	});
}
</script>

<template lang="pug">

fieldset.rating
  input#star5(type="radio" name="rating" value="5")
  label.full(for="star5" title="Awesome")
  input(type="radio" id="star4.5" name="rating" value="4.5")
  label.half(for="star4.5")
  input#star4(type="radio" name="rating" value="4")
  label.full(for="star4")
  input(type="radio" id="star3.5" name="rating" value="3.5")
  label.half(for="star3.5")
  input#star3(type="radio" name="rating" value="3")
  label.full(for="star3")
  input(type="radio" id="star2.5" name="rating" value="2.5")
  label.half(for="star2.5")
  input#star2(type="radio" name="rating" value="2")
  label.full(for="star2")
  input(type="radio" id="star1.5" name="rating" value="1.5")
  label.half(for="star1.5")
  input#star1(type="radio" name="rating" value="1")
  label.full(for="star1")
  input(type="radio" id="star0.5" name="rating" value="0.5")
  label.half(for="star0.5")

</template>


<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);


.container{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.rating-wrap{
	max-width: 480px;
	margin: auto;
	padding: 15px;
	box-shadow: 0 0 3px 0 rgba(0,0,0,.2);
	text-align: center;
}

.center{
	width: 162px; 
	margin: auto;
}


#rating-value{	
	width: 110px;
	margin: 40px auto 0;
	padding: 10px 5px;
	text-align: center;
	box-shadow: inset 0 0 2px 1px rgba(46,204,113,.2);
}

/*styling star rating*/
.rating{
	border: none;
	float: left;
}

.rating > input{
	display: none;
}

.rating > label:before{
	content: '\f005';
	font-family: FontAwesome;
	margin: 5px;
	font-size: 1.5rem;
	display: inline-block;
	cursor: pointer;
}

.rating > .half:before{
	content: '\f089';
	position: absolute;
	cursor: pointer;
}


.rating > label{
	color: #ddd;
	float: right;
	cursor: pointer;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover, 
.rating:not(:checked) > label:hover ~ label{
	color: #2ce679;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label{
	color: #2ddc76;
}

</style>