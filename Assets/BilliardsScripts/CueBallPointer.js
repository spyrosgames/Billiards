var CueBall : GameObject;
var Stick : GameObject;
var LineRendererMaterial : Material;

function Update () {
    var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    lineRenderer.useWorldSpace = false;
    lineRenderer.SetWidth(0.05, 0.05);
    lineRenderer.SetVertexCount(2);

    lineRenderer.material = LineRendererMaterial;
    var hit : RaycastHit;
    Physics.Raycast(transform.position,transform.forward,hit);
    if(hit.collider){
    	//lineRenderer.SetPosition(0, Stick.transform.position + Vector3(0, 0, 20));
    	lineRenderer.SetPosition(1,Vector3(0,0,hit.distance+10));
    }
    else{
        lineRenderer.SetPosition(1,Vector3(0,0,5000));
    }
}