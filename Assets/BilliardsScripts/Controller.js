var CueBall : GameObject;
var Stick : GameObject;
var Player : CharacterController;

var touchPad : Joystick;
var rotateTouchPad : Joystick;
var forwardSpeed : float = 4;
var backwardSpeed : float = 1;
var sidestepSpeed : float = 1;
var rotationSpeed : Vector2 = Vector2( 50, 25 );
var cameraPivot : Transform;
private var thisTransform : Transform;

private var camRotation;
private var velocity : Vector3;
private var character : CharacterController;
private var sliderValue : int = 100;

function Start()
{
	thisTransform = GetComponent(Transform);
	character = GetComponent(CharacterController);
}

function Update () {
	var movement = thisTransform.TransformDirection(Vector3(touchPad.position.x, 0, touchPad.position.y));
	movement.y = 0;
	movement.Normalize();
	
	var absJoyPos = Vector2(Mathf.Abs(touchPad.position.x), Mathf.Abs(touchPad.position.y));	
	if ( absJoyPos.y > absJoyPos.x )
	{
		if ( touchPad.position.y > 0 )
		{
			movement *= forwardSpeed * absJoyPos.y;
		}
		else
		{
			movement *= backwardSpeed * absJoyPos.y;
		}
	}
	else
	{
		movement *= sidestepSpeed * absJoyPos.x;
	}
	/*
	velocity.y += Physics.gravity.y * Time.deltaTime;
	movement += velocity;	
	movement += Physics.gravity;
	*/
	movement *= Time.deltaTime;
	
	Player.Move(movement);
	
	camRotation = rotateTouchPad.position;
	//camRotation = movement;
	Player.transform.LookAt(CueBall.transform);
	Player.transform.position.y = CueBall.transform.position.y;
	
	camRotation.x *= rotationSpeed.x;
	camRotation.y *= rotationSpeed.y;
	camRotation *= Time.deltaTime;
	
	var absJoyRot = Vector2( Mathf.Abs( rotateTouchPad.position.x ), Mathf.Abs( rotateTouchPad.position.y ) );	
	//Rotate the character around world-y using x-axis of joystick
	if(absJoyRot.y > absJoyRot.x)
	{
		Stick.transform.Rotate( camRotation.y, 0, 0, Space.World );
		Stick.transform.position.y += camRotation.y;
		Stick.transform.LookAt(CueBall.transform);
	}
	else
	{
		Stick.transform.Rotate( 0, camRotation.x, 0, Space.World );
		Stick.transform.position.x += camRotation.x;
		Stick.transform.LookAt(CueBall.transform);
	}
	//Stick.transform.Rotate( 0, camRotation.x, 0, Space.World );

	// Rotate only the camera with y-axis input
	cameraPivot.Rotate( -camRotation.y, 0, 0 );
	
}

