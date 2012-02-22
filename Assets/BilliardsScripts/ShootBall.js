private var sliderValue : int = 200;

function Start()
{
}

function OnGUI()
{
	
	sliderValue = GUI.VerticalSlider(Rect(20, 170, 200, 200), sliderValue, 600, 200);
}

function OnCollisionEnter(other : Collision)
{
	if(other.gameObject.tag == "CueBall")
	{
		other.rigidbody.AddForce(0, 0, sliderValue);
	}
}