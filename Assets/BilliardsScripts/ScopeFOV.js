public var FOVIN : float;
public var FOVSpeed : float;
public var Aim : boolean = false;
public var DefaultFOV : float;
public var Cam : GameObject;
public var AimButtonTexture : Texture2D;

function Start()
{
	DefaultFOV = Cam.camera.fieldOfView;
}

function OnGUI()
{
	if(GUI.Button(Rect(10, 10, 30, 30), AimButtonTexture))
	{
		if(!Aim)
		{
			Aim = true;
			
		}
		else
		{
			Aim = false;
		}
	}
}
function Update () {
	if(Aim)
	{
		Cam.camera.fieldOfView = Mathf.Lerp(Cam.camera.fieldOfView, FOVIN, FOVSpeed * Time.deltaTime);
	}
	else
	{
		Cam.camera.fieldOfView = Mathf.Lerp(Cam.camera.fieldOfView, DefaultFOV, FOVSpeed * Time.deltaTime);
	}
}