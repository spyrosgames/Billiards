private var lineRenderer : LineRenderer;
public var Player : GameObject;
public var CueBall : GameObject;
public var Stick : GameObject;
public var CAM : Camera;
public var moveTouchPad : Joystick;
public var rotateTouchPad : Joystick;

var lineRendereMaterial : Material;
function Start()
{
	lineRenderer = GetComponent(LineRenderer);
	lineRenderer.castShadows = false;
	lineRenderer.receiveShadows = false;
	lineRenderer.material = lineRendereMaterial;
	lineRenderer.SetPosition(0, Vector3(0, 0.5544715, -5.569848));
	lineRenderer.SetPosition(1, Vector3(5.3, 5.5, 1116));
	lineRenderer.SetWidth(0.04, 0.04);
	lineRenderer.SetColors(Color.white, Color.white);
	lineRenderer.useWorldSpace = true;
		
	lineRenderer.SetVertexCount(2);
}

var speed : float = 4.0;

function Update () {
	var playerPlane = new Plane(Vector3.up, Player.transform.position);
	var ray = new Ray(Stick.transform.position, CueBall.transform.position);
	var hitdist = 1.0;
	if(Physics.Raycast(ray, hitdist))
	{
		var targetPoint = ray.GetPoint(hitdist);
		//var targetRotation = Quaternion.LookRotation(targetPoint - lineRenderer.transform.position);
		var targetRotation = Quaternion.LookRotation(moveTouchPad.position);
		//lineRenderer.transform.rotation = Quaternion.Slerp(lineRenderer.transform.rotation, targetRotation, speed * Time.deltaTime);
	}
	else
	{
		targetPoint = CueBall.transform.position;
	}
	lineRenderer.SetPosition(0, CueBall.transform.position);
	lineRenderer.SetPosition(1, targetPoint);
}